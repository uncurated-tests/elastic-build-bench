'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5206<T> = T extends (infer U)[]
  ? DeepReadonlyArray5206<U>
  : T extends object
  ? DeepReadonlyObject5206<T>
  : T;

interface DeepReadonlyArray5206<T> extends ReadonlyArray<DeepReadonly5206<T>> {}

type DeepReadonlyObject5206<T> = {
  readonly [P in keyof T]: DeepReadonly5206<T[P]>;
};

type UnionToIntersection5206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5206<T> = UnionToIntersection5206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5206<T extends unknown[], V> = [...T, V];

type TuplifyUnion5206<T, L = LastOf5206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5206<TuplifyUnion5206<Exclude<T, L>>, L>;

type DeepPartial5206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5206<T[P]> }
  : T;

type Paths5206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5206<K, Paths5206<T[K], Prev5206[D]>> : never }[keyof T]
  : never;

type Prev5206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5206 {
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

type ConfigPaths5206 = Paths5206<NestedConfig5206>;

interface HeavyProps5206 {
  config: DeepPartial5206<NestedConfig5206>;
  path?: ConfigPaths5206;
}

const HeavyComponent5206 = memo(function HeavyComponent5206({ config }: HeavyProps5206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5206.displayName = 'HeavyComponent5206';
export default HeavyComponent5206;
