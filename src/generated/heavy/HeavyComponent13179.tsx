'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13179<T> = T extends (infer U)[]
  ? DeepReadonlyArray13179<U>
  : T extends object
  ? DeepReadonlyObject13179<T>
  : T;

interface DeepReadonlyArray13179<T> extends ReadonlyArray<DeepReadonly13179<T>> {}

type DeepReadonlyObject13179<T> = {
  readonly [P in keyof T]: DeepReadonly13179<T[P]>;
};

type UnionToIntersection13179<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13179<T> = UnionToIntersection13179<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13179<T extends unknown[], V> = [...T, V];

type TuplifyUnion13179<T, L = LastOf13179<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13179<TuplifyUnion13179<Exclude<T, L>>, L>;

type DeepPartial13179<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13179<T[P]> }
  : T;

type Paths13179<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13179<K, Paths13179<T[K], Prev13179[D]>> : never }[keyof T]
  : never;

type Prev13179 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13179<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13179 {
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

type ConfigPaths13179 = Paths13179<NestedConfig13179>;

interface HeavyProps13179 {
  config: DeepPartial13179<NestedConfig13179>;
  path?: ConfigPaths13179;
}

const HeavyComponent13179 = memo(function HeavyComponent13179({ config }: HeavyProps13179) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13179) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13179 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13179: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13179.displayName = 'HeavyComponent13179';
export default HeavyComponent13179;
