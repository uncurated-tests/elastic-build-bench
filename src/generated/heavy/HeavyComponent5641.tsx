'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5641<T> = T extends (infer U)[]
  ? DeepReadonlyArray5641<U>
  : T extends object
  ? DeepReadonlyObject5641<T>
  : T;

interface DeepReadonlyArray5641<T> extends ReadonlyArray<DeepReadonly5641<T>> {}

type DeepReadonlyObject5641<T> = {
  readonly [P in keyof T]: DeepReadonly5641<T[P]>;
};

type UnionToIntersection5641<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5641<T> = UnionToIntersection5641<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5641<T extends unknown[], V> = [...T, V];

type TuplifyUnion5641<T, L = LastOf5641<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5641<TuplifyUnion5641<Exclude<T, L>>, L>;

type DeepPartial5641<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5641<T[P]> }
  : T;

type Paths5641<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5641<K, Paths5641<T[K], Prev5641[D]>> : never }[keyof T]
  : never;

type Prev5641 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5641<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5641 {
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

type ConfigPaths5641 = Paths5641<NestedConfig5641>;

interface HeavyProps5641 {
  config: DeepPartial5641<NestedConfig5641>;
  path?: ConfigPaths5641;
}

const HeavyComponent5641 = memo(function HeavyComponent5641({ config }: HeavyProps5641) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5641) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5641 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5641: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5641.displayName = 'HeavyComponent5641';
export default HeavyComponent5641;
