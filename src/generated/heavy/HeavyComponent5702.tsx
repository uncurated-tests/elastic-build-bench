'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5702<T> = T extends (infer U)[]
  ? DeepReadonlyArray5702<U>
  : T extends object
  ? DeepReadonlyObject5702<T>
  : T;

interface DeepReadonlyArray5702<T> extends ReadonlyArray<DeepReadonly5702<T>> {}

type DeepReadonlyObject5702<T> = {
  readonly [P in keyof T]: DeepReadonly5702<T[P]>;
};

type UnionToIntersection5702<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5702<T> = UnionToIntersection5702<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5702<T extends unknown[], V> = [...T, V];

type TuplifyUnion5702<T, L = LastOf5702<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5702<TuplifyUnion5702<Exclude<T, L>>, L>;

type DeepPartial5702<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5702<T[P]> }
  : T;

type Paths5702<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5702<K, Paths5702<T[K], Prev5702[D]>> : never }[keyof T]
  : never;

type Prev5702 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5702<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5702 {
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

type ConfigPaths5702 = Paths5702<NestedConfig5702>;

interface HeavyProps5702 {
  config: DeepPartial5702<NestedConfig5702>;
  path?: ConfigPaths5702;
}

const HeavyComponent5702 = memo(function HeavyComponent5702({ config }: HeavyProps5702) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5702) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5702 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5702: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5702.displayName = 'HeavyComponent5702';
export default HeavyComponent5702;
