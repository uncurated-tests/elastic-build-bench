'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13948<T> = T extends (infer U)[]
  ? DeepReadonlyArray13948<U>
  : T extends object
  ? DeepReadonlyObject13948<T>
  : T;

interface DeepReadonlyArray13948<T> extends ReadonlyArray<DeepReadonly13948<T>> {}

type DeepReadonlyObject13948<T> = {
  readonly [P in keyof T]: DeepReadonly13948<T[P]>;
};

type UnionToIntersection13948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13948<T> = UnionToIntersection13948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13948<T extends unknown[], V> = [...T, V];

type TuplifyUnion13948<T, L = LastOf13948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13948<TuplifyUnion13948<Exclude<T, L>>, L>;

type DeepPartial13948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13948<T[P]> }
  : T;

type Paths13948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13948<K, Paths13948<T[K], Prev13948[D]>> : never }[keyof T]
  : never;

type Prev13948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13948 {
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

type ConfigPaths13948 = Paths13948<NestedConfig13948>;

interface HeavyProps13948 {
  config: DeepPartial13948<NestedConfig13948>;
  path?: ConfigPaths13948;
}

const HeavyComponent13948 = memo(function HeavyComponent13948({ config }: HeavyProps13948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13948.displayName = 'HeavyComponent13948';
export default HeavyComponent13948;
