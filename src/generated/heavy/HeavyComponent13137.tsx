'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13137<T> = T extends (infer U)[]
  ? DeepReadonlyArray13137<U>
  : T extends object
  ? DeepReadonlyObject13137<T>
  : T;

interface DeepReadonlyArray13137<T> extends ReadonlyArray<DeepReadonly13137<T>> {}

type DeepReadonlyObject13137<T> = {
  readonly [P in keyof T]: DeepReadonly13137<T[P]>;
};

type UnionToIntersection13137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13137<T> = UnionToIntersection13137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13137<T extends unknown[], V> = [...T, V];

type TuplifyUnion13137<T, L = LastOf13137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13137<TuplifyUnion13137<Exclude<T, L>>, L>;

type DeepPartial13137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13137<T[P]> }
  : T;

type Paths13137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13137<K, Paths13137<T[K], Prev13137[D]>> : never }[keyof T]
  : never;

type Prev13137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13137 {
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

type ConfigPaths13137 = Paths13137<NestedConfig13137>;

interface HeavyProps13137 {
  config: DeepPartial13137<NestedConfig13137>;
  path?: ConfigPaths13137;
}

const HeavyComponent13137 = memo(function HeavyComponent13137({ config }: HeavyProps13137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13137.displayName = 'HeavyComponent13137';
export default HeavyComponent13137;
