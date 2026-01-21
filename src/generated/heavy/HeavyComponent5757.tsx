'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5757<T> = T extends (infer U)[]
  ? DeepReadonlyArray5757<U>
  : T extends object
  ? DeepReadonlyObject5757<T>
  : T;

interface DeepReadonlyArray5757<T> extends ReadonlyArray<DeepReadonly5757<T>> {}

type DeepReadonlyObject5757<T> = {
  readonly [P in keyof T]: DeepReadonly5757<T[P]>;
};

type UnionToIntersection5757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5757<T> = UnionToIntersection5757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5757<T extends unknown[], V> = [...T, V];

type TuplifyUnion5757<T, L = LastOf5757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5757<TuplifyUnion5757<Exclude<T, L>>, L>;

type DeepPartial5757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5757<T[P]> }
  : T;

type Paths5757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5757<K, Paths5757<T[K], Prev5757[D]>> : never }[keyof T]
  : never;

type Prev5757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5757 {
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

type ConfigPaths5757 = Paths5757<NestedConfig5757>;

interface HeavyProps5757 {
  config: DeepPartial5757<NestedConfig5757>;
  path?: ConfigPaths5757;
}

const HeavyComponent5757 = memo(function HeavyComponent5757({ config }: HeavyProps5757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5757.displayName = 'HeavyComponent5757';
export default HeavyComponent5757;
