'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5044<T> = T extends (infer U)[]
  ? DeepReadonlyArray5044<U>
  : T extends object
  ? DeepReadonlyObject5044<T>
  : T;

interface DeepReadonlyArray5044<T> extends ReadonlyArray<DeepReadonly5044<T>> {}

type DeepReadonlyObject5044<T> = {
  readonly [P in keyof T]: DeepReadonly5044<T[P]>;
};

type UnionToIntersection5044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5044<T> = UnionToIntersection5044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5044<T extends unknown[], V> = [...T, V];

type TuplifyUnion5044<T, L = LastOf5044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5044<TuplifyUnion5044<Exclude<T, L>>, L>;

type DeepPartial5044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5044<T[P]> }
  : T;

type Paths5044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5044<K, Paths5044<T[K], Prev5044[D]>> : never }[keyof T]
  : never;

type Prev5044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5044 {
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

type ConfigPaths5044 = Paths5044<NestedConfig5044>;

interface HeavyProps5044 {
  config: DeepPartial5044<NestedConfig5044>;
  path?: ConfigPaths5044;
}

const HeavyComponent5044 = memo(function HeavyComponent5044({ config }: HeavyProps5044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5044.displayName = 'HeavyComponent5044';
export default HeavyComponent5044;
