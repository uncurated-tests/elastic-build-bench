'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5881<T> = T extends (infer U)[]
  ? DeepReadonlyArray5881<U>
  : T extends object
  ? DeepReadonlyObject5881<T>
  : T;

interface DeepReadonlyArray5881<T> extends ReadonlyArray<DeepReadonly5881<T>> {}

type DeepReadonlyObject5881<T> = {
  readonly [P in keyof T]: DeepReadonly5881<T[P]>;
};

type UnionToIntersection5881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5881<T> = UnionToIntersection5881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5881<T extends unknown[], V> = [...T, V];

type TuplifyUnion5881<T, L = LastOf5881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5881<TuplifyUnion5881<Exclude<T, L>>, L>;

type DeepPartial5881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5881<T[P]> }
  : T;

type Paths5881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5881<K, Paths5881<T[K], Prev5881[D]>> : never }[keyof T]
  : never;

type Prev5881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5881 {
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

type ConfigPaths5881 = Paths5881<NestedConfig5881>;

interface HeavyProps5881 {
  config: DeepPartial5881<NestedConfig5881>;
  path?: ConfigPaths5881;
}

const HeavyComponent5881 = memo(function HeavyComponent5881({ config }: HeavyProps5881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5881.displayName = 'HeavyComponent5881';
export default HeavyComponent5881;
