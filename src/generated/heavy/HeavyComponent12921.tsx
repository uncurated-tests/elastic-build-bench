'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12921<T> = T extends (infer U)[]
  ? DeepReadonlyArray12921<U>
  : T extends object
  ? DeepReadonlyObject12921<T>
  : T;

interface DeepReadonlyArray12921<T> extends ReadonlyArray<DeepReadonly12921<T>> {}

type DeepReadonlyObject12921<T> = {
  readonly [P in keyof T]: DeepReadonly12921<T[P]>;
};

type UnionToIntersection12921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12921<T> = UnionToIntersection12921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12921<T extends unknown[], V> = [...T, V];

type TuplifyUnion12921<T, L = LastOf12921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12921<TuplifyUnion12921<Exclude<T, L>>, L>;

type DeepPartial12921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12921<T[P]> }
  : T;

type Paths12921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12921<K, Paths12921<T[K], Prev12921[D]>> : never }[keyof T]
  : never;

type Prev12921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12921 {
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

type ConfigPaths12921 = Paths12921<NestedConfig12921>;

interface HeavyProps12921 {
  config: DeepPartial12921<NestedConfig12921>;
  path?: ConfigPaths12921;
}

const HeavyComponent12921 = memo(function HeavyComponent12921({ config }: HeavyProps12921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12921.displayName = 'HeavyComponent12921';
export default HeavyComponent12921;
