'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5580<T> = T extends (infer U)[]
  ? DeepReadonlyArray5580<U>
  : T extends object
  ? DeepReadonlyObject5580<T>
  : T;

interface DeepReadonlyArray5580<T> extends ReadonlyArray<DeepReadonly5580<T>> {}

type DeepReadonlyObject5580<T> = {
  readonly [P in keyof T]: DeepReadonly5580<T[P]>;
};

type UnionToIntersection5580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5580<T> = UnionToIntersection5580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5580<T extends unknown[], V> = [...T, V];

type TuplifyUnion5580<T, L = LastOf5580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5580<TuplifyUnion5580<Exclude<T, L>>, L>;

type DeepPartial5580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5580<T[P]> }
  : T;

type Paths5580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5580<K, Paths5580<T[K], Prev5580[D]>> : never }[keyof T]
  : never;

type Prev5580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5580 {
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

type ConfigPaths5580 = Paths5580<NestedConfig5580>;

interface HeavyProps5580 {
  config: DeepPartial5580<NestedConfig5580>;
  path?: ConfigPaths5580;
}

const HeavyComponent5580 = memo(function HeavyComponent5580({ config }: HeavyProps5580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5580.displayName = 'HeavyComponent5580';
export default HeavyComponent5580;
