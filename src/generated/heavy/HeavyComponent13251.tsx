'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13251<T> = T extends (infer U)[]
  ? DeepReadonlyArray13251<U>
  : T extends object
  ? DeepReadonlyObject13251<T>
  : T;

interface DeepReadonlyArray13251<T> extends ReadonlyArray<DeepReadonly13251<T>> {}

type DeepReadonlyObject13251<T> = {
  readonly [P in keyof T]: DeepReadonly13251<T[P]>;
};

type UnionToIntersection13251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13251<T> = UnionToIntersection13251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13251<T extends unknown[], V> = [...T, V];

type TuplifyUnion13251<T, L = LastOf13251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13251<TuplifyUnion13251<Exclude<T, L>>, L>;

type DeepPartial13251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13251<T[P]> }
  : T;

type Paths13251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13251<K, Paths13251<T[K], Prev13251[D]>> : never }[keyof T]
  : never;

type Prev13251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13251 {
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

type ConfigPaths13251 = Paths13251<NestedConfig13251>;

interface HeavyProps13251 {
  config: DeepPartial13251<NestedConfig13251>;
  path?: ConfigPaths13251;
}

const HeavyComponent13251 = memo(function HeavyComponent13251({ config }: HeavyProps13251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13251.displayName = 'HeavyComponent13251';
export default HeavyComponent13251;
