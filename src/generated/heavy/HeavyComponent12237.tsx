'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12237<T> = T extends (infer U)[]
  ? DeepReadonlyArray12237<U>
  : T extends object
  ? DeepReadonlyObject12237<T>
  : T;

interface DeepReadonlyArray12237<T> extends ReadonlyArray<DeepReadonly12237<T>> {}

type DeepReadonlyObject12237<T> = {
  readonly [P in keyof T]: DeepReadonly12237<T[P]>;
};

type UnionToIntersection12237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12237<T> = UnionToIntersection12237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12237<T extends unknown[], V> = [...T, V];

type TuplifyUnion12237<T, L = LastOf12237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12237<TuplifyUnion12237<Exclude<T, L>>, L>;

type DeepPartial12237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12237<T[P]> }
  : T;

type Paths12237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12237<K, Paths12237<T[K], Prev12237[D]>> : never }[keyof T]
  : never;

type Prev12237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12237 {
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

type ConfigPaths12237 = Paths12237<NestedConfig12237>;

interface HeavyProps12237 {
  config: DeepPartial12237<NestedConfig12237>;
  path?: ConfigPaths12237;
}

const HeavyComponent12237 = memo(function HeavyComponent12237({ config }: HeavyProps12237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12237.displayName = 'HeavyComponent12237';
export default HeavyComponent12237;
