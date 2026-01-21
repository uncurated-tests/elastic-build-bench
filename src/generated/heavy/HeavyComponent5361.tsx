'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5361<T> = T extends (infer U)[]
  ? DeepReadonlyArray5361<U>
  : T extends object
  ? DeepReadonlyObject5361<T>
  : T;

interface DeepReadonlyArray5361<T> extends ReadonlyArray<DeepReadonly5361<T>> {}

type DeepReadonlyObject5361<T> = {
  readonly [P in keyof T]: DeepReadonly5361<T[P]>;
};

type UnionToIntersection5361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5361<T> = UnionToIntersection5361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5361<T extends unknown[], V> = [...T, V];

type TuplifyUnion5361<T, L = LastOf5361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5361<TuplifyUnion5361<Exclude<T, L>>, L>;

type DeepPartial5361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5361<T[P]> }
  : T;

type Paths5361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5361<K, Paths5361<T[K], Prev5361[D]>> : never }[keyof T]
  : never;

type Prev5361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5361 {
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

type ConfigPaths5361 = Paths5361<NestedConfig5361>;

interface HeavyProps5361 {
  config: DeepPartial5361<NestedConfig5361>;
  path?: ConfigPaths5361;
}

const HeavyComponent5361 = memo(function HeavyComponent5361({ config }: HeavyProps5361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5361.displayName = 'HeavyComponent5361';
export default HeavyComponent5361;
