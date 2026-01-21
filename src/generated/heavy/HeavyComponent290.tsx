'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly290<T> = T extends (infer U)[]
  ? DeepReadonlyArray290<U>
  : T extends object
  ? DeepReadonlyObject290<T>
  : T;

interface DeepReadonlyArray290<T> extends ReadonlyArray<DeepReadonly290<T>> {}

type DeepReadonlyObject290<T> = {
  readonly [P in keyof T]: DeepReadonly290<T[P]>;
};

type UnionToIntersection290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf290<T> = UnionToIntersection290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push290<T extends unknown[], V> = [...T, V];

type TuplifyUnion290<T, L = LastOf290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push290<TuplifyUnion290<Exclude<T, L>>, L>;

type DeepPartial290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial290<T[P]> }
  : T;

type Paths290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join290<K, Paths290<T[K], Prev290[D]>> : never }[keyof T]
  : never;

type Prev290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig290 {
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

type ConfigPaths290 = Paths290<NestedConfig290>;

interface HeavyProps290 {
  config: DeepPartial290<NestedConfig290>;
  path?: ConfigPaths290;
}

const HeavyComponent290 = memo(function HeavyComponent290({ config }: HeavyProps290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent290.displayName = 'HeavyComponent290';
export default HeavyComponent290;
