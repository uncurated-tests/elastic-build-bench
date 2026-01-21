'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13752<T> = T extends (infer U)[]
  ? DeepReadonlyArray13752<U>
  : T extends object
  ? DeepReadonlyObject13752<T>
  : T;

interface DeepReadonlyArray13752<T> extends ReadonlyArray<DeepReadonly13752<T>> {}

type DeepReadonlyObject13752<T> = {
  readonly [P in keyof T]: DeepReadonly13752<T[P]>;
};

type UnionToIntersection13752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13752<T> = UnionToIntersection13752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13752<T extends unknown[], V> = [...T, V];

type TuplifyUnion13752<T, L = LastOf13752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13752<TuplifyUnion13752<Exclude<T, L>>, L>;

type DeepPartial13752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13752<T[P]> }
  : T;

type Paths13752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13752<K, Paths13752<T[K], Prev13752[D]>> : never }[keyof T]
  : never;

type Prev13752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13752 {
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

type ConfigPaths13752 = Paths13752<NestedConfig13752>;

interface HeavyProps13752 {
  config: DeepPartial13752<NestedConfig13752>;
  path?: ConfigPaths13752;
}

const HeavyComponent13752 = memo(function HeavyComponent13752({ config }: HeavyProps13752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13752.displayName = 'HeavyComponent13752';
export default HeavyComponent13752;
