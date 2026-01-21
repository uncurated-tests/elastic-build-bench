'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12651<T> = T extends (infer U)[]
  ? DeepReadonlyArray12651<U>
  : T extends object
  ? DeepReadonlyObject12651<T>
  : T;

interface DeepReadonlyArray12651<T> extends ReadonlyArray<DeepReadonly12651<T>> {}

type DeepReadonlyObject12651<T> = {
  readonly [P in keyof T]: DeepReadonly12651<T[P]>;
};

type UnionToIntersection12651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12651<T> = UnionToIntersection12651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12651<T extends unknown[], V> = [...T, V];

type TuplifyUnion12651<T, L = LastOf12651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12651<TuplifyUnion12651<Exclude<T, L>>, L>;

type DeepPartial12651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12651<T[P]> }
  : T;

type Paths12651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12651<K, Paths12651<T[K], Prev12651[D]>> : never }[keyof T]
  : never;

type Prev12651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12651 {
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

type ConfigPaths12651 = Paths12651<NestedConfig12651>;

interface HeavyProps12651 {
  config: DeepPartial12651<NestedConfig12651>;
  path?: ConfigPaths12651;
}

const HeavyComponent12651 = memo(function HeavyComponent12651({ config }: HeavyProps12651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12651.displayName = 'HeavyComponent12651';
export default HeavyComponent12651;
