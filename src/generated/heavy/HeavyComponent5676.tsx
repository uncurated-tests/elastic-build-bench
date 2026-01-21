'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5676<T> = T extends (infer U)[]
  ? DeepReadonlyArray5676<U>
  : T extends object
  ? DeepReadonlyObject5676<T>
  : T;

interface DeepReadonlyArray5676<T> extends ReadonlyArray<DeepReadonly5676<T>> {}

type DeepReadonlyObject5676<T> = {
  readonly [P in keyof T]: DeepReadonly5676<T[P]>;
};

type UnionToIntersection5676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5676<T> = UnionToIntersection5676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5676<T extends unknown[], V> = [...T, V];

type TuplifyUnion5676<T, L = LastOf5676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5676<TuplifyUnion5676<Exclude<T, L>>, L>;

type DeepPartial5676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5676<T[P]> }
  : T;

type Paths5676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5676<K, Paths5676<T[K], Prev5676[D]>> : never }[keyof T]
  : never;

type Prev5676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5676 {
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

type ConfigPaths5676 = Paths5676<NestedConfig5676>;

interface HeavyProps5676 {
  config: DeepPartial5676<NestedConfig5676>;
  path?: ConfigPaths5676;
}

const HeavyComponent5676 = memo(function HeavyComponent5676({ config }: HeavyProps5676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5676.displayName = 'HeavyComponent5676';
export default HeavyComponent5676;
