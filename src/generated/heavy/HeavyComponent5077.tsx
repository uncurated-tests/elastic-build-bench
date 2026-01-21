'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5077<T> = T extends (infer U)[]
  ? DeepReadonlyArray5077<U>
  : T extends object
  ? DeepReadonlyObject5077<T>
  : T;

interface DeepReadonlyArray5077<T> extends ReadonlyArray<DeepReadonly5077<T>> {}

type DeepReadonlyObject5077<T> = {
  readonly [P in keyof T]: DeepReadonly5077<T[P]>;
};

type UnionToIntersection5077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5077<T> = UnionToIntersection5077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5077<T extends unknown[], V> = [...T, V];

type TuplifyUnion5077<T, L = LastOf5077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5077<TuplifyUnion5077<Exclude<T, L>>, L>;

type DeepPartial5077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5077<T[P]> }
  : T;

type Paths5077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5077<K, Paths5077<T[K], Prev5077[D]>> : never }[keyof T]
  : never;

type Prev5077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5077 {
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

type ConfigPaths5077 = Paths5077<NestedConfig5077>;

interface HeavyProps5077 {
  config: DeepPartial5077<NestedConfig5077>;
  path?: ConfigPaths5077;
}

const HeavyComponent5077 = memo(function HeavyComponent5077({ config }: HeavyProps5077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5077.displayName = 'HeavyComponent5077';
export default HeavyComponent5077;
