'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5427<T> = T extends (infer U)[]
  ? DeepReadonlyArray5427<U>
  : T extends object
  ? DeepReadonlyObject5427<T>
  : T;

interface DeepReadonlyArray5427<T> extends ReadonlyArray<DeepReadonly5427<T>> {}

type DeepReadonlyObject5427<T> = {
  readonly [P in keyof T]: DeepReadonly5427<T[P]>;
};

type UnionToIntersection5427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5427<T> = UnionToIntersection5427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5427<T extends unknown[], V> = [...T, V];

type TuplifyUnion5427<T, L = LastOf5427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5427<TuplifyUnion5427<Exclude<T, L>>, L>;

type DeepPartial5427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5427<T[P]> }
  : T;

type Paths5427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5427<K, Paths5427<T[K], Prev5427[D]>> : never }[keyof T]
  : never;

type Prev5427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5427 {
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

type ConfigPaths5427 = Paths5427<NestedConfig5427>;

interface HeavyProps5427 {
  config: DeepPartial5427<NestedConfig5427>;
  path?: ConfigPaths5427;
}

const HeavyComponent5427 = memo(function HeavyComponent5427({ config }: HeavyProps5427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5427.displayName = 'HeavyComponent5427';
export default HeavyComponent5427;
