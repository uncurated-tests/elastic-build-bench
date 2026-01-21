'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13910<T> = T extends (infer U)[]
  ? DeepReadonlyArray13910<U>
  : T extends object
  ? DeepReadonlyObject13910<T>
  : T;

interface DeepReadonlyArray13910<T> extends ReadonlyArray<DeepReadonly13910<T>> {}

type DeepReadonlyObject13910<T> = {
  readonly [P in keyof T]: DeepReadonly13910<T[P]>;
};

type UnionToIntersection13910<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13910<T> = UnionToIntersection13910<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13910<T extends unknown[], V> = [...T, V];

type TuplifyUnion13910<T, L = LastOf13910<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13910<TuplifyUnion13910<Exclude<T, L>>, L>;

type DeepPartial13910<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13910<T[P]> }
  : T;

type Paths13910<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13910<K, Paths13910<T[K], Prev13910[D]>> : never }[keyof T]
  : never;

type Prev13910 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13910<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13910 {
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

type ConfigPaths13910 = Paths13910<NestedConfig13910>;

interface HeavyProps13910 {
  config: DeepPartial13910<NestedConfig13910>;
  path?: ConfigPaths13910;
}

const HeavyComponent13910 = memo(function HeavyComponent13910({ config }: HeavyProps13910) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13910) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13910 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13910: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13910.displayName = 'HeavyComponent13910';
export default HeavyComponent13910;
