'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13215<T> = T extends (infer U)[]
  ? DeepReadonlyArray13215<U>
  : T extends object
  ? DeepReadonlyObject13215<T>
  : T;

interface DeepReadonlyArray13215<T> extends ReadonlyArray<DeepReadonly13215<T>> {}

type DeepReadonlyObject13215<T> = {
  readonly [P in keyof T]: DeepReadonly13215<T[P]>;
};

type UnionToIntersection13215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13215<T> = UnionToIntersection13215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13215<T extends unknown[], V> = [...T, V];

type TuplifyUnion13215<T, L = LastOf13215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13215<TuplifyUnion13215<Exclude<T, L>>, L>;

type DeepPartial13215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13215<T[P]> }
  : T;

type Paths13215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13215<K, Paths13215<T[K], Prev13215[D]>> : never }[keyof T]
  : never;

type Prev13215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13215 {
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

type ConfigPaths13215 = Paths13215<NestedConfig13215>;

interface HeavyProps13215 {
  config: DeepPartial13215<NestedConfig13215>;
  path?: ConfigPaths13215;
}

const HeavyComponent13215 = memo(function HeavyComponent13215({ config }: HeavyProps13215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13215.displayName = 'HeavyComponent13215';
export default HeavyComponent13215;
