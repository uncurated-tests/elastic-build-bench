'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5043<T> = T extends (infer U)[]
  ? DeepReadonlyArray5043<U>
  : T extends object
  ? DeepReadonlyObject5043<T>
  : T;

interface DeepReadonlyArray5043<T> extends ReadonlyArray<DeepReadonly5043<T>> {}

type DeepReadonlyObject5043<T> = {
  readonly [P in keyof T]: DeepReadonly5043<T[P]>;
};

type UnionToIntersection5043<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5043<T> = UnionToIntersection5043<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5043<T extends unknown[], V> = [...T, V];

type TuplifyUnion5043<T, L = LastOf5043<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5043<TuplifyUnion5043<Exclude<T, L>>, L>;

type DeepPartial5043<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5043<T[P]> }
  : T;

type Paths5043<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5043<K, Paths5043<T[K], Prev5043[D]>> : never }[keyof T]
  : never;

type Prev5043 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5043<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5043 {
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

type ConfigPaths5043 = Paths5043<NestedConfig5043>;

interface HeavyProps5043 {
  config: DeepPartial5043<NestedConfig5043>;
  path?: ConfigPaths5043;
}

const HeavyComponent5043 = memo(function HeavyComponent5043({ config }: HeavyProps5043) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5043) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5043 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5043: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5043.displayName = 'HeavyComponent5043';
export default HeavyComponent5043;
