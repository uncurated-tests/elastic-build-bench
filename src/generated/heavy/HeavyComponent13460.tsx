'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13460<T> = T extends (infer U)[]
  ? DeepReadonlyArray13460<U>
  : T extends object
  ? DeepReadonlyObject13460<T>
  : T;

interface DeepReadonlyArray13460<T> extends ReadonlyArray<DeepReadonly13460<T>> {}

type DeepReadonlyObject13460<T> = {
  readonly [P in keyof T]: DeepReadonly13460<T[P]>;
};

type UnionToIntersection13460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13460<T> = UnionToIntersection13460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13460<T extends unknown[], V> = [...T, V];

type TuplifyUnion13460<T, L = LastOf13460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13460<TuplifyUnion13460<Exclude<T, L>>, L>;

type DeepPartial13460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13460<T[P]> }
  : T;

type Paths13460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13460<K, Paths13460<T[K], Prev13460[D]>> : never }[keyof T]
  : never;

type Prev13460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13460 {
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

type ConfigPaths13460 = Paths13460<NestedConfig13460>;

interface HeavyProps13460 {
  config: DeepPartial13460<NestedConfig13460>;
  path?: ConfigPaths13460;
}

const HeavyComponent13460 = memo(function HeavyComponent13460({ config }: HeavyProps13460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13460.displayName = 'HeavyComponent13460';
export default HeavyComponent13460;
