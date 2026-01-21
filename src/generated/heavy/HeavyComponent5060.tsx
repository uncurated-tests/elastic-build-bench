'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5060<T> = T extends (infer U)[]
  ? DeepReadonlyArray5060<U>
  : T extends object
  ? DeepReadonlyObject5060<T>
  : T;

interface DeepReadonlyArray5060<T> extends ReadonlyArray<DeepReadonly5060<T>> {}

type DeepReadonlyObject5060<T> = {
  readonly [P in keyof T]: DeepReadonly5060<T[P]>;
};

type UnionToIntersection5060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5060<T> = UnionToIntersection5060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5060<T extends unknown[], V> = [...T, V];

type TuplifyUnion5060<T, L = LastOf5060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5060<TuplifyUnion5060<Exclude<T, L>>, L>;

type DeepPartial5060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5060<T[P]> }
  : T;

type Paths5060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5060<K, Paths5060<T[K], Prev5060[D]>> : never }[keyof T]
  : never;

type Prev5060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5060 {
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

type ConfigPaths5060 = Paths5060<NestedConfig5060>;

interface HeavyProps5060 {
  config: DeepPartial5060<NestedConfig5060>;
  path?: ConfigPaths5060;
}

const HeavyComponent5060 = memo(function HeavyComponent5060({ config }: HeavyProps5060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5060.displayName = 'HeavyComponent5060';
export default HeavyComponent5060;
