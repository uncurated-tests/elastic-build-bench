'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5293<T> = T extends (infer U)[]
  ? DeepReadonlyArray5293<U>
  : T extends object
  ? DeepReadonlyObject5293<T>
  : T;

interface DeepReadonlyArray5293<T> extends ReadonlyArray<DeepReadonly5293<T>> {}

type DeepReadonlyObject5293<T> = {
  readonly [P in keyof T]: DeepReadonly5293<T[P]>;
};

type UnionToIntersection5293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5293<T> = UnionToIntersection5293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5293<T extends unknown[], V> = [...T, V];

type TuplifyUnion5293<T, L = LastOf5293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5293<TuplifyUnion5293<Exclude<T, L>>, L>;

type DeepPartial5293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5293<T[P]> }
  : T;

type Paths5293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5293<K, Paths5293<T[K], Prev5293[D]>> : never }[keyof T]
  : never;

type Prev5293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5293 {
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

type ConfigPaths5293 = Paths5293<NestedConfig5293>;

interface HeavyProps5293 {
  config: DeepPartial5293<NestedConfig5293>;
  path?: ConfigPaths5293;
}

const HeavyComponent5293 = memo(function HeavyComponent5293({ config }: HeavyProps5293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5293.displayName = 'HeavyComponent5293';
export default HeavyComponent5293;
