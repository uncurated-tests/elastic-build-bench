'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13382<T> = T extends (infer U)[]
  ? DeepReadonlyArray13382<U>
  : T extends object
  ? DeepReadonlyObject13382<T>
  : T;

interface DeepReadonlyArray13382<T> extends ReadonlyArray<DeepReadonly13382<T>> {}

type DeepReadonlyObject13382<T> = {
  readonly [P in keyof T]: DeepReadonly13382<T[P]>;
};

type UnionToIntersection13382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13382<T> = UnionToIntersection13382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13382<T extends unknown[], V> = [...T, V];

type TuplifyUnion13382<T, L = LastOf13382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13382<TuplifyUnion13382<Exclude<T, L>>, L>;

type DeepPartial13382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13382<T[P]> }
  : T;

type Paths13382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13382<K, Paths13382<T[K], Prev13382[D]>> : never }[keyof T]
  : never;

type Prev13382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13382 {
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

type ConfigPaths13382 = Paths13382<NestedConfig13382>;

interface HeavyProps13382 {
  config: DeepPartial13382<NestedConfig13382>;
  path?: ConfigPaths13382;
}

const HeavyComponent13382 = memo(function HeavyComponent13382({ config }: HeavyProps13382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13382.displayName = 'HeavyComponent13382';
export default HeavyComponent13382;
