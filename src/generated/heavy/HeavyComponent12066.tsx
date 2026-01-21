'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12066<T> = T extends (infer U)[]
  ? DeepReadonlyArray12066<U>
  : T extends object
  ? DeepReadonlyObject12066<T>
  : T;

interface DeepReadonlyArray12066<T> extends ReadonlyArray<DeepReadonly12066<T>> {}

type DeepReadonlyObject12066<T> = {
  readonly [P in keyof T]: DeepReadonly12066<T[P]>;
};

type UnionToIntersection12066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12066<T> = UnionToIntersection12066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12066<T extends unknown[], V> = [...T, V];

type TuplifyUnion12066<T, L = LastOf12066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12066<TuplifyUnion12066<Exclude<T, L>>, L>;

type DeepPartial12066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12066<T[P]> }
  : T;

type Paths12066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12066<K, Paths12066<T[K], Prev12066[D]>> : never }[keyof T]
  : never;

type Prev12066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12066 {
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

type ConfigPaths12066 = Paths12066<NestedConfig12066>;

interface HeavyProps12066 {
  config: DeepPartial12066<NestedConfig12066>;
  path?: ConfigPaths12066;
}

const HeavyComponent12066 = memo(function HeavyComponent12066({ config }: HeavyProps12066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12066.displayName = 'HeavyComponent12066';
export default HeavyComponent12066;
