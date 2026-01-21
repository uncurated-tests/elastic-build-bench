'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13723<T> = T extends (infer U)[]
  ? DeepReadonlyArray13723<U>
  : T extends object
  ? DeepReadonlyObject13723<T>
  : T;

interface DeepReadonlyArray13723<T> extends ReadonlyArray<DeepReadonly13723<T>> {}

type DeepReadonlyObject13723<T> = {
  readonly [P in keyof T]: DeepReadonly13723<T[P]>;
};

type UnionToIntersection13723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13723<T> = UnionToIntersection13723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13723<T extends unknown[], V> = [...T, V];

type TuplifyUnion13723<T, L = LastOf13723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13723<TuplifyUnion13723<Exclude<T, L>>, L>;

type DeepPartial13723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13723<T[P]> }
  : T;

type Paths13723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13723<K, Paths13723<T[K], Prev13723[D]>> : never }[keyof T]
  : never;

type Prev13723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13723 {
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

type ConfigPaths13723 = Paths13723<NestedConfig13723>;

interface HeavyProps13723 {
  config: DeepPartial13723<NestedConfig13723>;
  path?: ConfigPaths13723;
}

const HeavyComponent13723 = memo(function HeavyComponent13723({ config }: HeavyProps13723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13723.displayName = 'HeavyComponent13723';
export default HeavyComponent13723;
