'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13605<T> = T extends (infer U)[]
  ? DeepReadonlyArray13605<U>
  : T extends object
  ? DeepReadonlyObject13605<T>
  : T;

interface DeepReadonlyArray13605<T> extends ReadonlyArray<DeepReadonly13605<T>> {}

type DeepReadonlyObject13605<T> = {
  readonly [P in keyof T]: DeepReadonly13605<T[P]>;
};

type UnionToIntersection13605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13605<T> = UnionToIntersection13605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13605<T extends unknown[], V> = [...T, V];

type TuplifyUnion13605<T, L = LastOf13605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13605<TuplifyUnion13605<Exclude<T, L>>, L>;

type DeepPartial13605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13605<T[P]> }
  : T;

type Paths13605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13605<K, Paths13605<T[K], Prev13605[D]>> : never }[keyof T]
  : never;

type Prev13605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13605 {
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

type ConfigPaths13605 = Paths13605<NestedConfig13605>;

interface HeavyProps13605 {
  config: DeepPartial13605<NestedConfig13605>;
  path?: ConfigPaths13605;
}

const HeavyComponent13605 = memo(function HeavyComponent13605({ config }: HeavyProps13605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13605.displayName = 'HeavyComponent13605';
export default HeavyComponent13605;
