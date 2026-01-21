'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5573<T> = T extends (infer U)[]
  ? DeepReadonlyArray5573<U>
  : T extends object
  ? DeepReadonlyObject5573<T>
  : T;

interface DeepReadonlyArray5573<T> extends ReadonlyArray<DeepReadonly5573<T>> {}

type DeepReadonlyObject5573<T> = {
  readonly [P in keyof T]: DeepReadonly5573<T[P]>;
};

type UnionToIntersection5573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5573<T> = UnionToIntersection5573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5573<T extends unknown[], V> = [...T, V];

type TuplifyUnion5573<T, L = LastOf5573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5573<TuplifyUnion5573<Exclude<T, L>>, L>;

type DeepPartial5573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5573<T[P]> }
  : T;

type Paths5573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5573<K, Paths5573<T[K], Prev5573[D]>> : never }[keyof T]
  : never;

type Prev5573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5573 {
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

type ConfigPaths5573 = Paths5573<NestedConfig5573>;

interface HeavyProps5573 {
  config: DeepPartial5573<NestedConfig5573>;
  path?: ConfigPaths5573;
}

const HeavyComponent5573 = memo(function HeavyComponent5573({ config }: HeavyProps5573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5573.displayName = 'HeavyComponent5573';
export default HeavyComponent5573;
