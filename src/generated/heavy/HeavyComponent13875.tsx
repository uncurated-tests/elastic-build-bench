'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13875<T> = T extends (infer U)[]
  ? DeepReadonlyArray13875<U>
  : T extends object
  ? DeepReadonlyObject13875<T>
  : T;

interface DeepReadonlyArray13875<T> extends ReadonlyArray<DeepReadonly13875<T>> {}

type DeepReadonlyObject13875<T> = {
  readonly [P in keyof T]: DeepReadonly13875<T[P]>;
};

type UnionToIntersection13875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13875<T> = UnionToIntersection13875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13875<T extends unknown[], V> = [...T, V];

type TuplifyUnion13875<T, L = LastOf13875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13875<TuplifyUnion13875<Exclude<T, L>>, L>;

type DeepPartial13875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13875<T[P]> }
  : T;

type Paths13875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13875<K, Paths13875<T[K], Prev13875[D]>> : never }[keyof T]
  : never;

type Prev13875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13875 {
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

type ConfigPaths13875 = Paths13875<NestedConfig13875>;

interface HeavyProps13875 {
  config: DeepPartial13875<NestedConfig13875>;
  path?: ConfigPaths13875;
}

const HeavyComponent13875 = memo(function HeavyComponent13875({ config }: HeavyProps13875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13875.displayName = 'HeavyComponent13875';
export default HeavyComponent13875;
