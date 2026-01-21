'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5636<T> = T extends (infer U)[]
  ? DeepReadonlyArray5636<U>
  : T extends object
  ? DeepReadonlyObject5636<T>
  : T;

interface DeepReadonlyArray5636<T> extends ReadonlyArray<DeepReadonly5636<T>> {}

type DeepReadonlyObject5636<T> = {
  readonly [P in keyof T]: DeepReadonly5636<T[P]>;
};

type UnionToIntersection5636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5636<T> = UnionToIntersection5636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5636<T extends unknown[], V> = [...T, V];

type TuplifyUnion5636<T, L = LastOf5636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5636<TuplifyUnion5636<Exclude<T, L>>, L>;

type DeepPartial5636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5636<T[P]> }
  : T;

type Paths5636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5636<K, Paths5636<T[K], Prev5636[D]>> : never }[keyof T]
  : never;

type Prev5636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5636 {
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

type ConfigPaths5636 = Paths5636<NestedConfig5636>;

interface HeavyProps5636 {
  config: DeepPartial5636<NestedConfig5636>;
  path?: ConfigPaths5636;
}

const HeavyComponent5636 = memo(function HeavyComponent5636({ config }: HeavyProps5636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5636.displayName = 'HeavyComponent5636';
export default HeavyComponent5636;
