'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5749<T> = T extends (infer U)[]
  ? DeepReadonlyArray5749<U>
  : T extends object
  ? DeepReadonlyObject5749<T>
  : T;

interface DeepReadonlyArray5749<T> extends ReadonlyArray<DeepReadonly5749<T>> {}

type DeepReadonlyObject5749<T> = {
  readonly [P in keyof T]: DeepReadonly5749<T[P]>;
};

type UnionToIntersection5749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5749<T> = UnionToIntersection5749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5749<T extends unknown[], V> = [...T, V];

type TuplifyUnion5749<T, L = LastOf5749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5749<TuplifyUnion5749<Exclude<T, L>>, L>;

type DeepPartial5749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5749<T[P]> }
  : T;

type Paths5749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5749<K, Paths5749<T[K], Prev5749[D]>> : never }[keyof T]
  : never;

type Prev5749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5749 {
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

type ConfigPaths5749 = Paths5749<NestedConfig5749>;

interface HeavyProps5749 {
  config: DeepPartial5749<NestedConfig5749>;
  path?: ConfigPaths5749;
}

const HeavyComponent5749 = memo(function HeavyComponent5749({ config }: HeavyProps5749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5749.displayName = 'HeavyComponent5749';
export default HeavyComponent5749;
