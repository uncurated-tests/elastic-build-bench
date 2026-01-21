'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13293<T> = T extends (infer U)[]
  ? DeepReadonlyArray13293<U>
  : T extends object
  ? DeepReadonlyObject13293<T>
  : T;

interface DeepReadonlyArray13293<T> extends ReadonlyArray<DeepReadonly13293<T>> {}

type DeepReadonlyObject13293<T> = {
  readonly [P in keyof T]: DeepReadonly13293<T[P]>;
};

type UnionToIntersection13293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13293<T> = UnionToIntersection13293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13293<T extends unknown[], V> = [...T, V];

type TuplifyUnion13293<T, L = LastOf13293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13293<TuplifyUnion13293<Exclude<T, L>>, L>;

type DeepPartial13293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13293<T[P]> }
  : T;

type Paths13293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13293<K, Paths13293<T[K], Prev13293[D]>> : never }[keyof T]
  : never;

type Prev13293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13293 {
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

type ConfigPaths13293 = Paths13293<NestedConfig13293>;

interface HeavyProps13293 {
  config: DeepPartial13293<NestedConfig13293>;
  path?: ConfigPaths13293;
}

const HeavyComponent13293 = memo(function HeavyComponent13293({ config }: HeavyProps13293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13293.displayName = 'HeavyComponent13293';
export default HeavyComponent13293;
