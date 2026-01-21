'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5448<T> = T extends (infer U)[]
  ? DeepReadonlyArray5448<U>
  : T extends object
  ? DeepReadonlyObject5448<T>
  : T;

interface DeepReadonlyArray5448<T> extends ReadonlyArray<DeepReadonly5448<T>> {}

type DeepReadonlyObject5448<T> = {
  readonly [P in keyof T]: DeepReadonly5448<T[P]>;
};

type UnionToIntersection5448<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5448<T> = UnionToIntersection5448<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5448<T extends unknown[], V> = [...T, V];

type TuplifyUnion5448<T, L = LastOf5448<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5448<TuplifyUnion5448<Exclude<T, L>>, L>;

type DeepPartial5448<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5448<T[P]> }
  : T;

type Paths5448<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5448<K, Paths5448<T[K], Prev5448[D]>> : never }[keyof T]
  : never;

type Prev5448 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5448<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5448 {
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

type ConfigPaths5448 = Paths5448<NestedConfig5448>;

interface HeavyProps5448 {
  config: DeepPartial5448<NestedConfig5448>;
  path?: ConfigPaths5448;
}

const HeavyComponent5448 = memo(function HeavyComponent5448({ config }: HeavyProps5448) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5448) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5448 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5448: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5448.displayName = 'HeavyComponent5448';
export default HeavyComponent5448;
