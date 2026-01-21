'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5637<T> = T extends (infer U)[]
  ? DeepReadonlyArray5637<U>
  : T extends object
  ? DeepReadonlyObject5637<T>
  : T;

interface DeepReadonlyArray5637<T> extends ReadonlyArray<DeepReadonly5637<T>> {}

type DeepReadonlyObject5637<T> = {
  readonly [P in keyof T]: DeepReadonly5637<T[P]>;
};

type UnionToIntersection5637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5637<T> = UnionToIntersection5637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5637<T extends unknown[], V> = [...T, V];

type TuplifyUnion5637<T, L = LastOf5637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5637<TuplifyUnion5637<Exclude<T, L>>, L>;

type DeepPartial5637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5637<T[P]> }
  : T;

type Paths5637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5637<K, Paths5637<T[K], Prev5637[D]>> : never }[keyof T]
  : never;

type Prev5637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5637 {
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

type ConfigPaths5637 = Paths5637<NestedConfig5637>;

interface HeavyProps5637 {
  config: DeepPartial5637<NestedConfig5637>;
  path?: ConfigPaths5637;
}

const HeavyComponent5637 = memo(function HeavyComponent5637({ config }: HeavyProps5637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5637.displayName = 'HeavyComponent5637';
export default HeavyComponent5637;
