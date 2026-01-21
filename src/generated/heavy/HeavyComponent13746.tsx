'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13746<T> = T extends (infer U)[]
  ? DeepReadonlyArray13746<U>
  : T extends object
  ? DeepReadonlyObject13746<T>
  : T;

interface DeepReadonlyArray13746<T> extends ReadonlyArray<DeepReadonly13746<T>> {}

type DeepReadonlyObject13746<T> = {
  readonly [P in keyof T]: DeepReadonly13746<T[P]>;
};

type UnionToIntersection13746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13746<T> = UnionToIntersection13746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13746<T extends unknown[], V> = [...T, V];

type TuplifyUnion13746<T, L = LastOf13746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13746<TuplifyUnion13746<Exclude<T, L>>, L>;

type DeepPartial13746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13746<T[P]> }
  : T;

type Paths13746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13746<K, Paths13746<T[K], Prev13746[D]>> : never }[keyof T]
  : never;

type Prev13746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13746 {
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

type ConfigPaths13746 = Paths13746<NestedConfig13746>;

interface HeavyProps13746 {
  config: DeepPartial13746<NestedConfig13746>;
  path?: ConfigPaths13746;
}

const HeavyComponent13746 = memo(function HeavyComponent13746({ config }: HeavyProps13746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13746.displayName = 'HeavyComponent13746';
export default HeavyComponent13746;
