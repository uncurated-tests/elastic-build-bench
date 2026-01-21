'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13661<T> = T extends (infer U)[]
  ? DeepReadonlyArray13661<U>
  : T extends object
  ? DeepReadonlyObject13661<T>
  : T;

interface DeepReadonlyArray13661<T> extends ReadonlyArray<DeepReadonly13661<T>> {}

type DeepReadonlyObject13661<T> = {
  readonly [P in keyof T]: DeepReadonly13661<T[P]>;
};

type UnionToIntersection13661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13661<T> = UnionToIntersection13661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13661<T extends unknown[], V> = [...T, V];

type TuplifyUnion13661<T, L = LastOf13661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13661<TuplifyUnion13661<Exclude<T, L>>, L>;

type DeepPartial13661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13661<T[P]> }
  : T;

type Paths13661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13661<K, Paths13661<T[K], Prev13661[D]>> : never }[keyof T]
  : never;

type Prev13661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13661 {
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

type ConfigPaths13661 = Paths13661<NestedConfig13661>;

interface HeavyProps13661 {
  config: DeepPartial13661<NestedConfig13661>;
  path?: ConfigPaths13661;
}

const HeavyComponent13661 = memo(function HeavyComponent13661({ config }: HeavyProps13661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13661.displayName = 'HeavyComponent13661';
export default HeavyComponent13661;
