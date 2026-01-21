'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5387<T> = T extends (infer U)[]
  ? DeepReadonlyArray5387<U>
  : T extends object
  ? DeepReadonlyObject5387<T>
  : T;

interface DeepReadonlyArray5387<T> extends ReadonlyArray<DeepReadonly5387<T>> {}

type DeepReadonlyObject5387<T> = {
  readonly [P in keyof T]: DeepReadonly5387<T[P]>;
};

type UnionToIntersection5387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5387<T> = UnionToIntersection5387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5387<T extends unknown[], V> = [...T, V];

type TuplifyUnion5387<T, L = LastOf5387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5387<TuplifyUnion5387<Exclude<T, L>>, L>;

type DeepPartial5387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5387<T[P]> }
  : T;

type Paths5387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5387<K, Paths5387<T[K], Prev5387[D]>> : never }[keyof T]
  : never;

type Prev5387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5387 {
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

type ConfigPaths5387 = Paths5387<NestedConfig5387>;

interface HeavyProps5387 {
  config: DeepPartial5387<NestedConfig5387>;
  path?: ConfigPaths5387;
}

const HeavyComponent5387 = memo(function HeavyComponent5387({ config }: HeavyProps5387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5387.displayName = 'HeavyComponent5387';
export default HeavyComponent5387;
