'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5135<T> = T extends (infer U)[]
  ? DeepReadonlyArray5135<U>
  : T extends object
  ? DeepReadonlyObject5135<T>
  : T;

interface DeepReadonlyArray5135<T> extends ReadonlyArray<DeepReadonly5135<T>> {}

type DeepReadonlyObject5135<T> = {
  readonly [P in keyof T]: DeepReadonly5135<T[P]>;
};

type UnionToIntersection5135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5135<T> = UnionToIntersection5135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5135<T extends unknown[], V> = [...T, V];

type TuplifyUnion5135<T, L = LastOf5135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5135<TuplifyUnion5135<Exclude<T, L>>, L>;

type DeepPartial5135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5135<T[P]> }
  : T;

type Paths5135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5135<K, Paths5135<T[K], Prev5135[D]>> : never }[keyof T]
  : never;

type Prev5135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5135 {
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

type ConfigPaths5135 = Paths5135<NestedConfig5135>;

interface HeavyProps5135 {
  config: DeepPartial5135<NestedConfig5135>;
  path?: ConfigPaths5135;
}

const HeavyComponent5135 = memo(function HeavyComponent5135({ config }: HeavyProps5135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5135.displayName = 'HeavyComponent5135';
export default HeavyComponent5135;
