'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13437<T> = T extends (infer U)[]
  ? DeepReadonlyArray13437<U>
  : T extends object
  ? DeepReadonlyObject13437<T>
  : T;

interface DeepReadonlyArray13437<T> extends ReadonlyArray<DeepReadonly13437<T>> {}

type DeepReadonlyObject13437<T> = {
  readonly [P in keyof T]: DeepReadonly13437<T[P]>;
};

type UnionToIntersection13437<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13437<T> = UnionToIntersection13437<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13437<T extends unknown[], V> = [...T, V];

type TuplifyUnion13437<T, L = LastOf13437<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13437<TuplifyUnion13437<Exclude<T, L>>, L>;

type DeepPartial13437<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13437<T[P]> }
  : T;

type Paths13437<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13437<K, Paths13437<T[K], Prev13437[D]>> : never }[keyof T]
  : never;

type Prev13437 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13437<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13437 {
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

type ConfigPaths13437 = Paths13437<NestedConfig13437>;

interface HeavyProps13437 {
  config: DeepPartial13437<NestedConfig13437>;
  path?: ConfigPaths13437;
}

const HeavyComponent13437 = memo(function HeavyComponent13437({ config }: HeavyProps13437) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13437) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13437 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13437: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13437.displayName = 'HeavyComponent13437';
export default HeavyComponent13437;
