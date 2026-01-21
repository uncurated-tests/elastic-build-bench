'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12957<T> = T extends (infer U)[]
  ? DeepReadonlyArray12957<U>
  : T extends object
  ? DeepReadonlyObject12957<T>
  : T;

interface DeepReadonlyArray12957<T> extends ReadonlyArray<DeepReadonly12957<T>> {}

type DeepReadonlyObject12957<T> = {
  readonly [P in keyof T]: DeepReadonly12957<T[P]>;
};

type UnionToIntersection12957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12957<T> = UnionToIntersection12957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12957<T extends unknown[], V> = [...T, V];

type TuplifyUnion12957<T, L = LastOf12957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12957<TuplifyUnion12957<Exclude<T, L>>, L>;

type DeepPartial12957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12957<T[P]> }
  : T;

type Paths12957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12957<K, Paths12957<T[K], Prev12957[D]>> : never }[keyof T]
  : never;

type Prev12957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12957 {
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

type ConfigPaths12957 = Paths12957<NestedConfig12957>;

interface HeavyProps12957 {
  config: DeepPartial12957<NestedConfig12957>;
  path?: ConfigPaths12957;
}

const HeavyComponent12957 = memo(function HeavyComponent12957({ config }: HeavyProps12957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12957.displayName = 'HeavyComponent12957';
export default HeavyComponent12957;
