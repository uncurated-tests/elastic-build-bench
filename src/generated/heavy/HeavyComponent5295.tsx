'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5295<T> = T extends (infer U)[]
  ? DeepReadonlyArray5295<U>
  : T extends object
  ? DeepReadonlyObject5295<T>
  : T;

interface DeepReadonlyArray5295<T> extends ReadonlyArray<DeepReadonly5295<T>> {}

type DeepReadonlyObject5295<T> = {
  readonly [P in keyof T]: DeepReadonly5295<T[P]>;
};

type UnionToIntersection5295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5295<T> = UnionToIntersection5295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5295<T extends unknown[], V> = [...T, V];

type TuplifyUnion5295<T, L = LastOf5295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5295<TuplifyUnion5295<Exclude<T, L>>, L>;

type DeepPartial5295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5295<T[P]> }
  : T;

type Paths5295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5295<K, Paths5295<T[K], Prev5295[D]>> : never }[keyof T]
  : never;

type Prev5295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5295 {
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

type ConfigPaths5295 = Paths5295<NestedConfig5295>;

interface HeavyProps5295 {
  config: DeepPartial5295<NestedConfig5295>;
  path?: ConfigPaths5295;
}

const HeavyComponent5295 = memo(function HeavyComponent5295({ config }: HeavyProps5295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5295.displayName = 'HeavyComponent5295';
export default HeavyComponent5295;
