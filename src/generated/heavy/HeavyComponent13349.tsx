'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13349<T> = T extends (infer U)[]
  ? DeepReadonlyArray13349<U>
  : T extends object
  ? DeepReadonlyObject13349<T>
  : T;

interface DeepReadonlyArray13349<T> extends ReadonlyArray<DeepReadonly13349<T>> {}

type DeepReadonlyObject13349<T> = {
  readonly [P in keyof T]: DeepReadonly13349<T[P]>;
};

type UnionToIntersection13349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13349<T> = UnionToIntersection13349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13349<T extends unknown[], V> = [...T, V];

type TuplifyUnion13349<T, L = LastOf13349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13349<TuplifyUnion13349<Exclude<T, L>>, L>;

type DeepPartial13349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13349<T[P]> }
  : T;

type Paths13349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13349<K, Paths13349<T[K], Prev13349[D]>> : never }[keyof T]
  : never;

type Prev13349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13349 {
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

type ConfigPaths13349 = Paths13349<NestedConfig13349>;

interface HeavyProps13349 {
  config: DeepPartial13349<NestedConfig13349>;
  path?: ConfigPaths13349;
}

const HeavyComponent13349 = memo(function HeavyComponent13349({ config }: HeavyProps13349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13349.displayName = 'HeavyComponent13349';
export default HeavyComponent13349;
