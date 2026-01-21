'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5407<T> = T extends (infer U)[]
  ? DeepReadonlyArray5407<U>
  : T extends object
  ? DeepReadonlyObject5407<T>
  : T;

interface DeepReadonlyArray5407<T> extends ReadonlyArray<DeepReadonly5407<T>> {}

type DeepReadonlyObject5407<T> = {
  readonly [P in keyof T]: DeepReadonly5407<T[P]>;
};

type UnionToIntersection5407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5407<T> = UnionToIntersection5407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5407<T extends unknown[], V> = [...T, V];

type TuplifyUnion5407<T, L = LastOf5407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5407<TuplifyUnion5407<Exclude<T, L>>, L>;

type DeepPartial5407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5407<T[P]> }
  : T;

type Paths5407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5407<K, Paths5407<T[K], Prev5407[D]>> : never }[keyof T]
  : never;

type Prev5407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5407 {
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

type ConfigPaths5407 = Paths5407<NestedConfig5407>;

interface HeavyProps5407 {
  config: DeepPartial5407<NestedConfig5407>;
  path?: ConfigPaths5407;
}

const HeavyComponent5407 = memo(function HeavyComponent5407({ config }: HeavyProps5407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5407.displayName = 'HeavyComponent5407';
export default HeavyComponent5407;
