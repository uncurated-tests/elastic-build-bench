'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly293<T> = T extends (infer U)[]
  ? DeepReadonlyArray293<U>
  : T extends object
  ? DeepReadonlyObject293<T>
  : T;

interface DeepReadonlyArray293<T> extends ReadonlyArray<DeepReadonly293<T>> {}

type DeepReadonlyObject293<T> = {
  readonly [P in keyof T]: DeepReadonly293<T[P]>;
};

type UnionToIntersection293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf293<T> = UnionToIntersection293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push293<T extends unknown[], V> = [...T, V];

type TuplifyUnion293<T, L = LastOf293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push293<TuplifyUnion293<Exclude<T, L>>, L>;

type DeepPartial293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial293<T[P]> }
  : T;

type Paths293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join293<K, Paths293<T[K], Prev293[D]>> : never }[keyof T]
  : never;

type Prev293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig293 {
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

type ConfigPaths293 = Paths293<NestedConfig293>;

interface HeavyProps293 {
  config: DeepPartial293<NestedConfig293>;
  path?: ConfigPaths293;
}

const HeavyComponent293 = memo(function HeavyComponent293({ config }: HeavyProps293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent293.displayName = 'HeavyComponent293';
export default HeavyComponent293;
