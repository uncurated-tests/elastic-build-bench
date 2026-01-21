'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13313<T> = T extends (infer U)[]
  ? DeepReadonlyArray13313<U>
  : T extends object
  ? DeepReadonlyObject13313<T>
  : T;

interface DeepReadonlyArray13313<T> extends ReadonlyArray<DeepReadonly13313<T>> {}

type DeepReadonlyObject13313<T> = {
  readonly [P in keyof T]: DeepReadonly13313<T[P]>;
};

type UnionToIntersection13313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13313<T> = UnionToIntersection13313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13313<T extends unknown[], V> = [...T, V];

type TuplifyUnion13313<T, L = LastOf13313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13313<TuplifyUnion13313<Exclude<T, L>>, L>;

type DeepPartial13313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13313<T[P]> }
  : T;

type Paths13313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13313<K, Paths13313<T[K], Prev13313[D]>> : never }[keyof T]
  : never;

type Prev13313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13313 {
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

type ConfigPaths13313 = Paths13313<NestedConfig13313>;

interface HeavyProps13313 {
  config: DeepPartial13313<NestedConfig13313>;
  path?: ConfigPaths13313;
}

const HeavyComponent13313 = memo(function HeavyComponent13313({ config }: HeavyProps13313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13313.displayName = 'HeavyComponent13313';
export default HeavyComponent13313;
