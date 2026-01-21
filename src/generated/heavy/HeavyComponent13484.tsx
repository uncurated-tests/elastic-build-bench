'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13484<T> = T extends (infer U)[]
  ? DeepReadonlyArray13484<U>
  : T extends object
  ? DeepReadonlyObject13484<T>
  : T;

interface DeepReadonlyArray13484<T> extends ReadonlyArray<DeepReadonly13484<T>> {}

type DeepReadonlyObject13484<T> = {
  readonly [P in keyof T]: DeepReadonly13484<T[P]>;
};

type UnionToIntersection13484<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13484<T> = UnionToIntersection13484<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13484<T extends unknown[], V> = [...T, V];

type TuplifyUnion13484<T, L = LastOf13484<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13484<TuplifyUnion13484<Exclude<T, L>>, L>;

type DeepPartial13484<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13484<T[P]> }
  : T;

type Paths13484<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13484<K, Paths13484<T[K], Prev13484[D]>> : never }[keyof T]
  : never;

type Prev13484 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13484<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13484 {
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

type ConfigPaths13484 = Paths13484<NestedConfig13484>;

interface HeavyProps13484 {
  config: DeepPartial13484<NestedConfig13484>;
  path?: ConfigPaths13484;
}

const HeavyComponent13484 = memo(function HeavyComponent13484({ config }: HeavyProps13484) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13484) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13484 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13484: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13484.displayName = 'HeavyComponent13484';
export default HeavyComponent13484;
