'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13411<T> = T extends (infer U)[]
  ? DeepReadonlyArray13411<U>
  : T extends object
  ? DeepReadonlyObject13411<T>
  : T;

interface DeepReadonlyArray13411<T> extends ReadonlyArray<DeepReadonly13411<T>> {}

type DeepReadonlyObject13411<T> = {
  readonly [P in keyof T]: DeepReadonly13411<T[P]>;
};

type UnionToIntersection13411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13411<T> = UnionToIntersection13411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13411<T extends unknown[], V> = [...T, V];

type TuplifyUnion13411<T, L = LastOf13411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13411<TuplifyUnion13411<Exclude<T, L>>, L>;

type DeepPartial13411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13411<T[P]> }
  : T;

type Paths13411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13411<K, Paths13411<T[K], Prev13411[D]>> : never }[keyof T]
  : never;

type Prev13411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13411 {
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

type ConfigPaths13411 = Paths13411<NestedConfig13411>;

interface HeavyProps13411 {
  config: DeepPartial13411<NestedConfig13411>;
  path?: ConfigPaths13411;
}

const HeavyComponent13411 = memo(function HeavyComponent13411({ config }: HeavyProps13411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13411.displayName = 'HeavyComponent13411';
export default HeavyComponent13411;
