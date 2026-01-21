'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13425<T> = T extends (infer U)[]
  ? DeepReadonlyArray13425<U>
  : T extends object
  ? DeepReadonlyObject13425<T>
  : T;

interface DeepReadonlyArray13425<T> extends ReadonlyArray<DeepReadonly13425<T>> {}

type DeepReadonlyObject13425<T> = {
  readonly [P in keyof T]: DeepReadonly13425<T[P]>;
};

type UnionToIntersection13425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13425<T> = UnionToIntersection13425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13425<T extends unknown[], V> = [...T, V];

type TuplifyUnion13425<T, L = LastOf13425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13425<TuplifyUnion13425<Exclude<T, L>>, L>;

type DeepPartial13425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13425<T[P]> }
  : T;

type Paths13425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13425<K, Paths13425<T[K], Prev13425[D]>> : never }[keyof T]
  : never;

type Prev13425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13425 {
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

type ConfigPaths13425 = Paths13425<NestedConfig13425>;

interface HeavyProps13425 {
  config: DeepPartial13425<NestedConfig13425>;
  path?: ConfigPaths13425;
}

const HeavyComponent13425 = memo(function HeavyComponent13425({ config }: HeavyProps13425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13425.displayName = 'HeavyComponent13425';
export default HeavyComponent13425;
