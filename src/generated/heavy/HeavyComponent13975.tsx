'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13975<T> = T extends (infer U)[]
  ? DeepReadonlyArray13975<U>
  : T extends object
  ? DeepReadonlyObject13975<T>
  : T;

interface DeepReadonlyArray13975<T> extends ReadonlyArray<DeepReadonly13975<T>> {}

type DeepReadonlyObject13975<T> = {
  readonly [P in keyof T]: DeepReadonly13975<T[P]>;
};

type UnionToIntersection13975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13975<T> = UnionToIntersection13975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13975<T extends unknown[], V> = [...T, V];

type TuplifyUnion13975<T, L = LastOf13975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13975<TuplifyUnion13975<Exclude<T, L>>, L>;

type DeepPartial13975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13975<T[P]> }
  : T;

type Paths13975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13975<K, Paths13975<T[K], Prev13975[D]>> : never }[keyof T]
  : never;

type Prev13975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13975 {
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

type ConfigPaths13975 = Paths13975<NestedConfig13975>;

interface HeavyProps13975 {
  config: DeepPartial13975<NestedConfig13975>;
  path?: ConfigPaths13975;
}

const HeavyComponent13975 = memo(function HeavyComponent13975({ config }: HeavyProps13975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13975.displayName = 'HeavyComponent13975';
export default HeavyComponent13975;
