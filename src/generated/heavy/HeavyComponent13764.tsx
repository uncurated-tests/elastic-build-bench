'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13764<T> = T extends (infer U)[]
  ? DeepReadonlyArray13764<U>
  : T extends object
  ? DeepReadonlyObject13764<T>
  : T;

interface DeepReadonlyArray13764<T> extends ReadonlyArray<DeepReadonly13764<T>> {}

type DeepReadonlyObject13764<T> = {
  readonly [P in keyof T]: DeepReadonly13764<T[P]>;
};

type UnionToIntersection13764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13764<T> = UnionToIntersection13764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13764<T extends unknown[], V> = [...T, V];

type TuplifyUnion13764<T, L = LastOf13764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13764<TuplifyUnion13764<Exclude<T, L>>, L>;

type DeepPartial13764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13764<T[P]> }
  : T;

type Paths13764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13764<K, Paths13764<T[K], Prev13764[D]>> : never }[keyof T]
  : never;

type Prev13764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13764 {
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

type ConfigPaths13764 = Paths13764<NestedConfig13764>;

interface HeavyProps13764 {
  config: DeepPartial13764<NestedConfig13764>;
  path?: ConfigPaths13764;
}

const HeavyComponent13764 = memo(function HeavyComponent13764({ config }: HeavyProps13764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13764.displayName = 'HeavyComponent13764';
export default HeavyComponent13764;
