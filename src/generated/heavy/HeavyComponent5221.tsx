'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5221<T> = T extends (infer U)[]
  ? DeepReadonlyArray5221<U>
  : T extends object
  ? DeepReadonlyObject5221<T>
  : T;

interface DeepReadonlyArray5221<T> extends ReadonlyArray<DeepReadonly5221<T>> {}

type DeepReadonlyObject5221<T> = {
  readonly [P in keyof T]: DeepReadonly5221<T[P]>;
};

type UnionToIntersection5221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5221<T> = UnionToIntersection5221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5221<T extends unknown[], V> = [...T, V];

type TuplifyUnion5221<T, L = LastOf5221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5221<TuplifyUnion5221<Exclude<T, L>>, L>;

type DeepPartial5221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5221<T[P]> }
  : T;

type Paths5221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5221<K, Paths5221<T[K], Prev5221[D]>> : never }[keyof T]
  : never;

type Prev5221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5221 {
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

type ConfigPaths5221 = Paths5221<NestedConfig5221>;

interface HeavyProps5221 {
  config: DeepPartial5221<NestedConfig5221>;
  path?: ConfigPaths5221;
}

const HeavyComponent5221 = memo(function HeavyComponent5221({ config }: HeavyProps5221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5221.displayName = 'HeavyComponent5221';
export default HeavyComponent5221;
