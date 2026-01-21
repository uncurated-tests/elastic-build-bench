'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13200<T> = T extends (infer U)[]
  ? DeepReadonlyArray13200<U>
  : T extends object
  ? DeepReadonlyObject13200<T>
  : T;

interface DeepReadonlyArray13200<T> extends ReadonlyArray<DeepReadonly13200<T>> {}

type DeepReadonlyObject13200<T> = {
  readonly [P in keyof T]: DeepReadonly13200<T[P]>;
};

type UnionToIntersection13200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13200<T> = UnionToIntersection13200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13200<T extends unknown[], V> = [...T, V];

type TuplifyUnion13200<T, L = LastOf13200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13200<TuplifyUnion13200<Exclude<T, L>>, L>;

type DeepPartial13200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13200<T[P]> }
  : T;

type Paths13200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13200<K, Paths13200<T[K], Prev13200[D]>> : never }[keyof T]
  : never;

type Prev13200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13200 {
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

type ConfigPaths13200 = Paths13200<NestedConfig13200>;

interface HeavyProps13200 {
  config: DeepPartial13200<NestedConfig13200>;
  path?: ConfigPaths13200;
}

const HeavyComponent13200 = memo(function HeavyComponent13200({ config }: HeavyProps13200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13200.displayName = 'HeavyComponent13200';
export default HeavyComponent13200;
