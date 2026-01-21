'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12747<T> = T extends (infer U)[]
  ? DeepReadonlyArray12747<U>
  : T extends object
  ? DeepReadonlyObject12747<T>
  : T;

interface DeepReadonlyArray12747<T> extends ReadonlyArray<DeepReadonly12747<T>> {}

type DeepReadonlyObject12747<T> = {
  readonly [P in keyof T]: DeepReadonly12747<T[P]>;
};

type UnionToIntersection12747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12747<T> = UnionToIntersection12747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12747<T extends unknown[], V> = [...T, V];

type TuplifyUnion12747<T, L = LastOf12747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12747<TuplifyUnion12747<Exclude<T, L>>, L>;

type DeepPartial12747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12747<T[P]> }
  : T;

type Paths12747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12747<K, Paths12747<T[K], Prev12747[D]>> : never }[keyof T]
  : never;

type Prev12747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12747 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths12747 = Paths12747<NestedConfig12747>;

interface HeavyProps12747 {
  config: DeepPartial12747<NestedConfig12747>;
  path?: ConfigPaths12747;
}

const HeavyComponent12747 = memo(function HeavyComponent12747({ config }: HeavyProps12747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12747.displayName = 'HeavyComponent12747';
export default HeavyComponent12747;
