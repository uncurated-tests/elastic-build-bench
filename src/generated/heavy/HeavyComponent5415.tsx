'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5415<T> = T extends (infer U)[]
  ? DeepReadonlyArray5415<U>
  : T extends object
  ? DeepReadonlyObject5415<T>
  : T;

interface DeepReadonlyArray5415<T> extends ReadonlyArray<DeepReadonly5415<T>> {}

type DeepReadonlyObject5415<T> = {
  readonly [P in keyof T]: DeepReadonly5415<T[P]>;
};

type UnionToIntersection5415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5415<T> = UnionToIntersection5415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5415<T extends unknown[], V> = [...T, V];

type TuplifyUnion5415<T, L = LastOf5415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5415<TuplifyUnion5415<Exclude<T, L>>, L>;

type DeepPartial5415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5415<T[P]> }
  : T;

type Paths5415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5415<K, Paths5415<T[K], Prev5415[D]>> : never }[keyof T]
  : never;

type Prev5415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5415 {
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

type ConfigPaths5415 = Paths5415<NestedConfig5415>;

interface HeavyProps5415 {
  config: DeepPartial5415<NestedConfig5415>;
  path?: ConfigPaths5415;
}

const HeavyComponent5415 = memo(function HeavyComponent5415({ config }: HeavyProps5415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5415.displayName = 'HeavyComponent5415';
export default HeavyComponent5415;
