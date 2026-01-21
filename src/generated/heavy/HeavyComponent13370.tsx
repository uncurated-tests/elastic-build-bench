'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13370<T> = T extends (infer U)[]
  ? DeepReadonlyArray13370<U>
  : T extends object
  ? DeepReadonlyObject13370<T>
  : T;

interface DeepReadonlyArray13370<T> extends ReadonlyArray<DeepReadonly13370<T>> {}

type DeepReadonlyObject13370<T> = {
  readonly [P in keyof T]: DeepReadonly13370<T[P]>;
};

type UnionToIntersection13370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13370<T> = UnionToIntersection13370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13370<T extends unknown[], V> = [...T, V];

type TuplifyUnion13370<T, L = LastOf13370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13370<TuplifyUnion13370<Exclude<T, L>>, L>;

type DeepPartial13370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13370<T[P]> }
  : T;

type Paths13370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13370<K, Paths13370<T[K], Prev13370[D]>> : never }[keyof T]
  : never;

type Prev13370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13370 {
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

type ConfigPaths13370 = Paths13370<NestedConfig13370>;

interface HeavyProps13370 {
  config: DeepPartial13370<NestedConfig13370>;
  path?: ConfigPaths13370;
}

const HeavyComponent13370 = memo(function HeavyComponent13370({ config }: HeavyProps13370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13370.displayName = 'HeavyComponent13370';
export default HeavyComponent13370;
