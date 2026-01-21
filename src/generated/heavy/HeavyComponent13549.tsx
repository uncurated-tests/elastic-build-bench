'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13549<T> = T extends (infer U)[]
  ? DeepReadonlyArray13549<U>
  : T extends object
  ? DeepReadonlyObject13549<T>
  : T;

interface DeepReadonlyArray13549<T> extends ReadonlyArray<DeepReadonly13549<T>> {}

type DeepReadonlyObject13549<T> = {
  readonly [P in keyof T]: DeepReadonly13549<T[P]>;
};

type UnionToIntersection13549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13549<T> = UnionToIntersection13549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13549<T extends unknown[], V> = [...T, V];

type TuplifyUnion13549<T, L = LastOf13549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13549<TuplifyUnion13549<Exclude<T, L>>, L>;

type DeepPartial13549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13549<T[P]> }
  : T;

type Paths13549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13549<K, Paths13549<T[K], Prev13549[D]>> : never }[keyof T]
  : never;

type Prev13549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13549 {
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

type ConfigPaths13549 = Paths13549<NestedConfig13549>;

interface HeavyProps13549 {
  config: DeepPartial13549<NestedConfig13549>;
  path?: ConfigPaths13549;
}

const HeavyComponent13549 = memo(function HeavyComponent13549({ config }: HeavyProps13549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13549.displayName = 'HeavyComponent13549';
export default HeavyComponent13549;
