'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13772<T> = T extends (infer U)[]
  ? DeepReadonlyArray13772<U>
  : T extends object
  ? DeepReadonlyObject13772<T>
  : T;

interface DeepReadonlyArray13772<T> extends ReadonlyArray<DeepReadonly13772<T>> {}

type DeepReadonlyObject13772<T> = {
  readonly [P in keyof T]: DeepReadonly13772<T[P]>;
};

type UnionToIntersection13772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13772<T> = UnionToIntersection13772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13772<T extends unknown[], V> = [...T, V];

type TuplifyUnion13772<T, L = LastOf13772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13772<TuplifyUnion13772<Exclude<T, L>>, L>;

type DeepPartial13772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13772<T[P]> }
  : T;

type Paths13772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13772<K, Paths13772<T[K], Prev13772[D]>> : never }[keyof T]
  : never;

type Prev13772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13772 {
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

type ConfigPaths13772 = Paths13772<NestedConfig13772>;

interface HeavyProps13772 {
  config: DeepPartial13772<NestedConfig13772>;
  path?: ConfigPaths13772;
}

const HeavyComponent13772 = memo(function HeavyComponent13772({ config }: HeavyProps13772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13772.displayName = 'HeavyComponent13772';
export default HeavyComponent13772;
