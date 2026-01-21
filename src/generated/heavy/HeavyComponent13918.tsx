'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13918<T> = T extends (infer U)[]
  ? DeepReadonlyArray13918<U>
  : T extends object
  ? DeepReadonlyObject13918<T>
  : T;

interface DeepReadonlyArray13918<T> extends ReadonlyArray<DeepReadonly13918<T>> {}

type DeepReadonlyObject13918<T> = {
  readonly [P in keyof T]: DeepReadonly13918<T[P]>;
};

type UnionToIntersection13918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13918<T> = UnionToIntersection13918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13918<T extends unknown[], V> = [...T, V];

type TuplifyUnion13918<T, L = LastOf13918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13918<TuplifyUnion13918<Exclude<T, L>>, L>;

type DeepPartial13918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13918<T[P]> }
  : T;

type Paths13918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13918<K, Paths13918<T[K], Prev13918[D]>> : never }[keyof T]
  : never;

type Prev13918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13918 {
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

type ConfigPaths13918 = Paths13918<NestedConfig13918>;

interface HeavyProps13918 {
  config: DeepPartial13918<NestedConfig13918>;
  path?: ConfigPaths13918;
}

const HeavyComponent13918 = memo(function HeavyComponent13918({ config }: HeavyProps13918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13918.displayName = 'HeavyComponent13918';
export default HeavyComponent13918;
