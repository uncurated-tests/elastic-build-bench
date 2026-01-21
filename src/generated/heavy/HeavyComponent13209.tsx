'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13209<T> = T extends (infer U)[]
  ? DeepReadonlyArray13209<U>
  : T extends object
  ? DeepReadonlyObject13209<T>
  : T;

interface DeepReadonlyArray13209<T> extends ReadonlyArray<DeepReadonly13209<T>> {}

type DeepReadonlyObject13209<T> = {
  readonly [P in keyof T]: DeepReadonly13209<T[P]>;
};

type UnionToIntersection13209<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13209<T> = UnionToIntersection13209<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13209<T extends unknown[], V> = [...T, V];

type TuplifyUnion13209<T, L = LastOf13209<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13209<TuplifyUnion13209<Exclude<T, L>>, L>;

type DeepPartial13209<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13209<T[P]> }
  : T;

type Paths13209<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13209<K, Paths13209<T[K], Prev13209[D]>> : never }[keyof T]
  : never;

type Prev13209 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13209<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13209 {
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

type ConfigPaths13209 = Paths13209<NestedConfig13209>;

interface HeavyProps13209 {
  config: DeepPartial13209<NestedConfig13209>;
  path?: ConfigPaths13209;
}

const HeavyComponent13209 = memo(function HeavyComponent13209({ config }: HeavyProps13209) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13209) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13209 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13209: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13209.displayName = 'HeavyComponent13209';
export default HeavyComponent13209;
