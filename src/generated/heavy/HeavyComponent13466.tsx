'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13466<T> = T extends (infer U)[]
  ? DeepReadonlyArray13466<U>
  : T extends object
  ? DeepReadonlyObject13466<T>
  : T;

interface DeepReadonlyArray13466<T> extends ReadonlyArray<DeepReadonly13466<T>> {}

type DeepReadonlyObject13466<T> = {
  readonly [P in keyof T]: DeepReadonly13466<T[P]>;
};

type UnionToIntersection13466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13466<T> = UnionToIntersection13466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13466<T extends unknown[], V> = [...T, V];

type TuplifyUnion13466<T, L = LastOf13466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13466<TuplifyUnion13466<Exclude<T, L>>, L>;

type DeepPartial13466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13466<T[P]> }
  : T;

type Paths13466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13466<K, Paths13466<T[K], Prev13466[D]>> : never }[keyof T]
  : never;

type Prev13466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13466 {
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

type ConfigPaths13466 = Paths13466<NestedConfig13466>;

interface HeavyProps13466 {
  config: DeepPartial13466<NestedConfig13466>;
  path?: ConfigPaths13466;
}

const HeavyComponent13466 = memo(function HeavyComponent13466({ config }: HeavyProps13466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13466.displayName = 'HeavyComponent13466';
export default HeavyComponent13466;
