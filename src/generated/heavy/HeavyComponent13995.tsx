'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13995<T> = T extends (infer U)[]
  ? DeepReadonlyArray13995<U>
  : T extends object
  ? DeepReadonlyObject13995<T>
  : T;

interface DeepReadonlyArray13995<T> extends ReadonlyArray<DeepReadonly13995<T>> {}

type DeepReadonlyObject13995<T> = {
  readonly [P in keyof T]: DeepReadonly13995<T[P]>;
};

type UnionToIntersection13995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13995<T> = UnionToIntersection13995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13995<T extends unknown[], V> = [...T, V];

type TuplifyUnion13995<T, L = LastOf13995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13995<TuplifyUnion13995<Exclude<T, L>>, L>;

type DeepPartial13995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13995<T[P]> }
  : T;

type Paths13995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13995<K, Paths13995<T[K], Prev13995[D]>> : never }[keyof T]
  : never;

type Prev13995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13995 {
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

type ConfigPaths13995 = Paths13995<NestedConfig13995>;

interface HeavyProps13995 {
  config: DeepPartial13995<NestedConfig13995>;
  path?: ConfigPaths13995;
}

const HeavyComponent13995 = memo(function HeavyComponent13995({ config }: HeavyProps13995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13995.displayName = 'HeavyComponent13995';
export default HeavyComponent13995;
