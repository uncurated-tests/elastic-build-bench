'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13837<T> = T extends (infer U)[]
  ? DeepReadonlyArray13837<U>
  : T extends object
  ? DeepReadonlyObject13837<T>
  : T;

interface DeepReadonlyArray13837<T> extends ReadonlyArray<DeepReadonly13837<T>> {}

type DeepReadonlyObject13837<T> = {
  readonly [P in keyof T]: DeepReadonly13837<T[P]>;
};

type UnionToIntersection13837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13837<T> = UnionToIntersection13837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13837<T extends unknown[], V> = [...T, V];

type TuplifyUnion13837<T, L = LastOf13837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13837<TuplifyUnion13837<Exclude<T, L>>, L>;

type DeepPartial13837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13837<T[P]> }
  : T;

type Paths13837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13837<K, Paths13837<T[K], Prev13837[D]>> : never }[keyof T]
  : never;

type Prev13837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13837 {
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

type ConfigPaths13837 = Paths13837<NestedConfig13837>;

interface HeavyProps13837 {
  config: DeepPartial13837<NestedConfig13837>;
  path?: ConfigPaths13837;
}

const HeavyComponent13837 = memo(function HeavyComponent13837({ config }: HeavyProps13837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13837.displayName = 'HeavyComponent13837';
export default HeavyComponent13837;
