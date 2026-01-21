'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5411<T> = T extends (infer U)[]
  ? DeepReadonlyArray5411<U>
  : T extends object
  ? DeepReadonlyObject5411<T>
  : T;

interface DeepReadonlyArray5411<T> extends ReadonlyArray<DeepReadonly5411<T>> {}

type DeepReadonlyObject5411<T> = {
  readonly [P in keyof T]: DeepReadonly5411<T[P]>;
};

type UnionToIntersection5411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5411<T> = UnionToIntersection5411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5411<T extends unknown[], V> = [...T, V];

type TuplifyUnion5411<T, L = LastOf5411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5411<TuplifyUnion5411<Exclude<T, L>>, L>;

type DeepPartial5411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5411<T[P]> }
  : T;

type Paths5411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5411<K, Paths5411<T[K], Prev5411[D]>> : never }[keyof T]
  : never;

type Prev5411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5411 {
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

type ConfigPaths5411 = Paths5411<NestedConfig5411>;

interface HeavyProps5411 {
  config: DeepPartial5411<NestedConfig5411>;
  path?: ConfigPaths5411;
}

const HeavyComponent5411 = memo(function HeavyComponent5411({ config }: HeavyProps5411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5411.displayName = 'HeavyComponent5411';
export default HeavyComponent5411;
