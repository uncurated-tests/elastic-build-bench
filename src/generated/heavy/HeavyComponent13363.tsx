'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13363<T> = T extends (infer U)[]
  ? DeepReadonlyArray13363<U>
  : T extends object
  ? DeepReadonlyObject13363<T>
  : T;

interface DeepReadonlyArray13363<T> extends ReadonlyArray<DeepReadonly13363<T>> {}

type DeepReadonlyObject13363<T> = {
  readonly [P in keyof T]: DeepReadonly13363<T[P]>;
};

type UnionToIntersection13363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13363<T> = UnionToIntersection13363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13363<T extends unknown[], V> = [...T, V];

type TuplifyUnion13363<T, L = LastOf13363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13363<TuplifyUnion13363<Exclude<T, L>>, L>;

type DeepPartial13363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13363<T[P]> }
  : T;

type Paths13363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13363<K, Paths13363<T[K], Prev13363[D]>> : never }[keyof T]
  : never;

type Prev13363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13363 {
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

type ConfigPaths13363 = Paths13363<NestedConfig13363>;

interface HeavyProps13363 {
  config: DeepPartial13363<NestedConfig13363>;
  path?: ConfigPaths13363;
}

const HeavyComponent13363 = memo(function HeavyComponent13363({ config }: HeavyProps13363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13363.displayName = 'HeavyComponent13363';
export default HeavyComponent13363;
