'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13217<T> = T extends (infer U)[]
  ? DeepReadonlyArray13217<U>
  : T extends object
  ? DeepReadonlyObject13217<T>
  : T;

interface DeepReadonlyArray13217<T> extends ReadonlyArray<DeepReadonly13217<T>> {}

type DeepReadonlyObject13217<T> = {
  readonly [P in keyof T]: DeepReadonly13217<T[P]>;
};

type UnionToIntersection13217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13217<T> = UnionToIntersection13217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13217<T extends unknown[], V> = [...T, V];

type TuplifyUnion13217<T, L = LastOf13217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13217<TuplifyUnion13217<Exclude<T, L>>, L>;

type DeepPartial13217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13217<T[P]> }
  : T;

type Paths13217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13217<K, Paths13217<T[K], Prev13217[D]>> : never }[keyof T]
  : never;

type Prev13217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13217 {
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

type ConfigPaths13217 = Paths13217<NestedConfig13217>;

interface HeavyProps13217 {
  config: DeepPartial13217<NestedConfig13217>;
  path?: ConfigPaths13217;
}

const HeavyComponent13217 = memo(function HeavyComponent13217({ config }: HeavyProps13217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13217.displayName = 'HeavyComponent13217';
export default HeavyComponent13217;
