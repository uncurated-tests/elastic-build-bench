'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13869<T> = T extends (infer U)[]
  ? DeepReadonlyArray13869<U>
  : T extends object
  ? DeepReadonlyObject13869<T>
  : T;

interface DeepReadonlyArray13869<T> extends ReadonlyArray<DeepReadonly13869<T>> {}

type DeepReadonlyObject13869<T> = {
  readonly [P in keyof T]: DeepReadonly13869<T[P]>;
};

type UnionToIntersection13869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13869<T> = UnionToIntersection13869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13869<T extends unknown[], V> = [...T, V];

type TuplifyUnion13869<T, L = LastOf13869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13869<TuplifyUnion13869<Exclude<T, L>>, L>;

type DeepPartial13869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13869<T[P]> }
  : T;

type Paths13869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13869<K, Paths13869<T[K], Prev13869[D]>> : never }[keyof T]
  : never;

type Prev13869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13869 {
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

type ConfigPaths13869 = Paths13869<NestedConfig13869>;

interface HeavyProps13869 {
  config: DeepPartial13869<NestedConfig13869>;
  path?: ConfigPaths13869;
}

const HeavyComponent13869 = memo(function HeavyComponent13869({ config }: HeavyProps13869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13869.displayName = 'HeavyComponent13869';
export default HeavyComponent13869;
