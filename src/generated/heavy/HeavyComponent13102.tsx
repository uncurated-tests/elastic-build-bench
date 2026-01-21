'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13102<T> = T extends (infer U)[]
  ? DeepReadonlyArray13102<U>
  : T extends object
  ? DeepReadonlyObject13102<T>
  : T;

interface DeepReadonlyArray13102<T> extends ReadonlyArray<DeepReadonly13102<T>> {}

type DeepReadonlyObject13102<T> = {
  readonly [P in keyof T]: DeepReadonly13102<T[P]>;
};

type UnionToIntersection13102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13102<T> = UnionToIntersection13102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13102<T extends unknown[], V> = [...T, V];

type TuplifyUnion13102<T, L = LastOf13102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13102<TuplifyUnion13102<Exclude<T, L>>, L>;

type DeepPartial13102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13102<T[P]> }
  : T;

type Paths13102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13102<K, Paths13102<T[K], Prev13102[D]>> : never }[keyof T]
  : never;

type Prev13102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13102 {
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

type ConfigPaths13102 = Paths13102<NestedConfig13102>;

interface HeavyProps13102 {
  config: DeepPartial13102<NestedConfig13102>;
  path?: ConfigPaths13102;
}

const HeavyComponent13102 = memo(function HeavyComponent13102({ config }: HeavyProps13102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13102.displayName = 'HeavyComponent13102';
export default HeavyComponent13102;
