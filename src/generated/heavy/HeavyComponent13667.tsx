'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13667<T> = T extends (infer U)[]
  ? DeepReadonlyArray13667<U>
  : T extends object
  ? DeepReadonlyObject13667<T>
  : T;

interface DeepReadonlyArray13667<T> extends ReadonlyArray<DeepReadonly13667<T>> {}

type DeepReadonlyObject13667<T> = {
  readonly [P in keyof T]: DeepReadonly13667<T[P]>;
};

type UnionToIntersection13667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13667<T> = UnionToIntersection13667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13667<T extends unknown[], V> = [...T, V];

type TuplifyUnion13667<T, L = LastOf13667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13667<TuplifyUnion13667<Exclude<T, L>>, L>;

type DeepPartial13667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13667<T[P]> }
  : T;

type Paths13667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13667<K, Paths13667<T[K], Prev13667[D]>> : never }[keyof T]
  : never;

type Prev13667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13667 {
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

type ConfigPaths13667 = Paths13667<NestedConfig13667>;

interface HeavyProps13667 {
  config: DeepPartial13667<NestedConfig13667>;
  path?: ConfigPaths13667;
}

const HeavyComponent13667 = memo(function HeavyComponent13667({ config }: HeavyProps13667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13667.displayName = 'HeavyComponent13667';
export default HeavyComponent13667;
