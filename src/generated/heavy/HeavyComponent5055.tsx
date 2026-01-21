'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5055<T> = T extends (infer U)[]
  ? DeepReadonlyArray5055<U>
  : T extends object
  ? DeepReadonlyObject5055<T>
  : T;

interface DeepReadonlyArray5055<T> extends ReadonlyArray<DeepReadonly5055<T>> {}

type DeepReadonlyObject5055<T> = {
  readonly [P in keyof T]: DeepReadonly5055<T[P]>;
};

type UnionToIntersection5055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5055<T> = UnionToIntersection5055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5055<T extends unknown[], V> = [...T, V];

type TuplifyUnion5055<T, L = LastOf5055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5055<TuplifyUnion5055<Exclude<T, L>>, L>;

type DeepPartial5055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5055<T[P]> }
  : T;

type Paths5055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5055<K, Paths5055<T[K], Prev5055[D]>> : never }[keyof T]
  : never;

type Prev5055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5055 {
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

type ConfigPaths5055 = Paths5055<NestedConfig5055>;

interface HeavyProps5055 {
  config: DeepPartial5055<NestedConfig5055>;
  path?: ConfigPaths5055;
}

const HeavyComponent5055 = memo(function HeavyComponent5055({ config }: HeavyProps5055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5055.displayName = 'HeavyComponent5055';
export default HeavyComponent5055;
