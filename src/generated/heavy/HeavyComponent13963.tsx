'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13963<T> = T extends (infer U)[]
  ? DeepReadonlyArray13963<U>
  : T extends object
  ? DeepReadonlyObject13963<T>
  : T;

interface DeepReadonlyArray13963<T> extends ReadonlyArray<DeepReadonly13963<T>> {}

type DeepReadonlyObject13963<T> = {
  readonly [P in keyof T]: DeepReadonly13963<T[P]>;
};

type UnionToIntersection13963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13963<T> = UnionToIntersection13963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13963<T extends unknown[], V> = [...T, V];

type TuplifyUnion13963<T, L = LastOf13963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13963<TuplifyUnion13963<Exclude<T, L>>, L>;

type DeepPartial13963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13963<T[P]> }
  : T;

type Paths13963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13963<K, Paths13963<T[K], Prev13963[D]>> : never }[keyof T]
  : never;

type Prev13963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13963 {
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

type ConfigPaths13963 = Paths13963<NestedConfig13963>;

interface HeavyProps13963 {
  config: DeepPartial13963<NestedConfig13963>;
  path?: ConfigPaths13963;
}

const HeavyComponent13963 = memo(function HeavyComponent13963({ config }: HeavyProps13963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13963.displayName = 'HeavyComponent13963';
export default HeavyComponent13963;
