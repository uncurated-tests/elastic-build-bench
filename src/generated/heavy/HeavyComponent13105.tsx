'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13105<T> = T extends (infer U)[]
  ? DeepReadonlyArray13105<U>
  : T extends object
  ? DeepReadonlyObject13105<T>
  : T;

interface DeepReadonlyArray13105<T> extends ReadonlyArray<DeepReadonly13105<T>> {}

type DeepReadonlyObject13105<T> = {
  readonly [P in keyof T]: DeepReadonly13105<T[P]>;
};

type UnionToIntersection13105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13105<T> = UnionToIntersection13105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13105<T extends unknown[], V> = [...T, V];

type TuplifyUnion13105<T, L = LastOf13105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13105<TuplifyUnion13105<Exclude<T, L>>, L>;

type DeepPartial13105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13105<T[P]> }
  : T;

type Paths13105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13105<K, Paths13105<T[K], Prev13105[D]>> : never }[keyof T]
  : never;

type Prev13105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13105 {
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

type ConfigPaths13105 = Paths13105<NestedConfig13105>;

interface HeavyProps13105 {
  config: DeepPartial13105<NestedConfig13105>;
  path?: ConfigPaths13105;
}

const HeavyComponent13105 = memo(function HeavyComponent13105({ config }: HeavyProps13105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13105.displayName = 'HeavyComponent13105';
export default HeavyComponent13105;
