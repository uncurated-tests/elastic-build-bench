'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5328<T> = T extends (infer U)[]
  ? DeepReadonlyArray5328<U>
  : T extends object
  ? DeepReadonlyObject5328<T>
  : T;

interface DeepReadonlyArray5328<T> extends ReadonlyArray<DeepReadonly5328<T>> {}

type DeepReadonlyObject5328<T> = {
  readonly [P in keyof T]: DeepReadonly5328<T[P]>;
};

type UnionToIntersection5328<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5328<T> = UnionToIntersection5328<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5328<T extends unknown[], V> = [...T, V];

type TuplifyUnion5328<T, L = LastOf5328<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5328<TuplifyUnion5328<Exclude<T, L>>, L>;

type DeepPartial5328<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5328<T[P]> }
  : T;

type Paths5328<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5328<K, Paths5328<T[K], Prev5328[D]>> : never }[keyof T]
  : never;

type Prev5328 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5328<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5328 {
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

type ConfigPaths5328 = Paths5328<NestedConfig5328>;

interface HeavyProps5328 {
  config: DeepPartial5328<NestedConfig5328>;
  path?: ConfigPaths5328;
}

const HeavyComponent5328 = memo(function HeavyComponent5328({ config }: HeavyProps5328) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5328) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5328 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5328: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5328.displayName = 'HeavyComponent5328';
export default HeavyComponent5328;
