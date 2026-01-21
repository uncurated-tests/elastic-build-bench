'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13047<T> = T extends (infer U)[]
  ? DeepReadonlyArray13047<U>
  : T extends object
  ? DeepReadonlyObject13047<T>
  : T;

interface DeepReadonlyArray13047<T> extends ReadonlyArray<DeepReadonly13047<T>> {}

type DeepReadonlyObject13047<T> = {
  readonly [P in keyof T]: DeepReadonly13047<T[P]>;
};

type UnionToIntersection13047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13047<T> = UnionToIntersection13047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13047<T extends unknown[], V> = [...T, V];

type TuplifyUnion13047<T, L = LastOf13047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13047<TuplifyUnion13047<Exclude<T, L>>, L>;

type DeepPartial13047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13047<T[P]> }
  : T;

type Paths13047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13047<K, Paths13047<T[K], Prev13047[D]>> : never }[keyof T]
  : never;

type Prev13047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13047 {
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

type ConfigPaths13047 = Paths13047<NestedConfig13047>;

interface HeavyProps13047 {
  config: DeepPartial13047<NestedConfig13047>;
  path?: ConfigPaths13047;
}

const HeavyComponent13047 = memo(function HeavyComponent13047({ config }: HeavyProps13047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13047.displayName = 'HeavyComponent13047';
export default HeavyComponent13047;
