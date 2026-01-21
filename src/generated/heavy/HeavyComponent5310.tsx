'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5310<T> = T extends (infer U)[]
  ? DeepReadonlyArray5310<U>
  : T extends object
  ? DeepReadonlyObject5310<T>
  : T;

interface DeepReadonlyArray5310<T> extends ReadonlyArray<DeepReadonly5310<T>> {}

type DeepReadonlyObject5310<T> = {
  readonly [P in keyof T]: DeepReadonly5310<T[P]>;
};

type UnionToIntersection5310<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5310<T> = UnionToIntersection5310<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5310<T extends unknown[], V> = [...T, V];

type TuplifyUnion5310<T, L = LastOf5310<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5310<TuplifyUnion5310<Exclude<T, L>>, L>;

type DeepPartial5310<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5310<T[P]> }
  : T;

type Paths5310<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5310<K, Paths5310<T[K], Prev5310[D]>> : never }[keyof T]
  : never;

type Prev5310 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5310<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5310 {
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

type ConfigPaths5310 = Paths5310<NestedConfig5310>;

interface HeavyProps5310 {
  config: DeepPartial5310<NestedConfig5310>;
  path?: ConfigPaths5310;
}

const HeavyComponent5310 = memo(function HeavyComponent5310({ config }: HeavyProps5310) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5310) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5310 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5310: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5310.displayName = 'HeavyComponent5310';
export default HeavyComponent5310;
