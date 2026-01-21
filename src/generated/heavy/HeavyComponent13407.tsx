'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13407<T> = T extends (infer U)[]
  ? DeepReadonlyArray13407<U>
  : T extends object
  ? DeepReadonlyObject13407<T>
  : T;

interface DeepReadonlyArray13407<T> extends ReadonlyArray<DeepReadonly13407<T>> {}

type DeepReadonlyObject13407<T> = {
  readonly [P in keyof T]: DeepReadonly13407<T[P]>;
};

type UnionToIntersection13407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13407<T> = UnionToIntersection13407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13407<T extends unknown[], V> = [...T, V];

type TuplifyUnion13407<T, L = LastOf13407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13407<TuplifyUnion13407<Exclude<T, L>>, L>;

type DeepPartial13407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13407<T[P]> }
  : T;

type Paths13407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13407<K, Paths13407<T[K], Prev13407[D]>> : never }[keyof T]
  : never;

type Prev13407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13407 {
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

type ConfigPaths13407 = Paths13407<NestedConfig13407>;

interface HeavyProps13407 {
  config: DeepPartial13407<NestedConfig13407>;
  path?: ConfigPaths13407;
}

const HeavyComponent13407 = memo(function HeavyComponent13407({ config }: HeavyProps13407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13407.displayName = 'HeavyComponent13407';
export default HeavyComponent13407;
