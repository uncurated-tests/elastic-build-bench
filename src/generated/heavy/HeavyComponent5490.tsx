'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5490<T> = T extends (infer U)[]
  ? DeepReadonlyArray5490<U>
  : T extends object
  ? DeepReadonlyObject5490<T>
  : T;

interface DeepReadonlyArray5490<T> extends ReadonlyArray<DeepReadonly5490<T>> {}

type DeepReadonlyObject5490<T> = {
  readonly [P in keyof T]: DeepReadonly5490<T[P]>;
};

type UnionToIntersection5490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5490<T> = UnionToIntersection5490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5490<T extends unknown[], V> = [...T, V];

type TuplifyUnion5490<T, L = LastOf5490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5490<TuplifyUnion5490<Exclude<T, L>>, L>;

type DeepPartial5490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5490<T[P]> }
  : T;

type Paths5490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5490<K, Paths5490<T[K], Prev5490[D]>> : never }[keyof T]
  : never;

type Prev5490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5490 {
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

type ConfigPaths5490 = Paths5490<NestedConfig5490>;

interface HeavyProps5490 {
  config: DeepPartial5490<NestedConfig5490>;
  path?: ConfigPaths5490;
}

const HeavyComponent5490 = memo(function HeavyComponent5490({ config }: HeavyProps5490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5490.displayName = 'HeavyComponent5490';
export default HeavyComponent5490;
