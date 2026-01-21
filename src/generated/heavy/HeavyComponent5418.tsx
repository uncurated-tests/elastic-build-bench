'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5418<T> = T extends (infer U)[]
  ? DeepReadonlyArray5418<U>
  : T extends object
  ? DeepReadonlyObject5418<T>
  : T;

interface DeepReadonlyArray5418<T> extends ReadonlyArray<DeepReadonly5418<T>> {}

type DeepReadonlyObject5418<T> = {
  readonly [P in keyof T]: DeepReadonly5418<T[P]>;
};

type UnionToIntersection5418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5418<T> = UnionToIntersection5418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5418<T extends unknown[], V> = [...T, V];

type TuplifyUnion5418<T, L = LastOf5418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5418<TuplifyUnion5418<Exclude<T, L>>, L>;

type DeepPartial5418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5418<T[P]> }
  : T;

type Paths5418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5418<K, Paths5418<T[K], Prev5418[D]>> : never }[keyof T]
  : never;

type Prev5418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5418 {
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

type ConfigPaths5418 = Paths5418<NestedConfig5418>;

interface HeavyProps5418 {
  config: DeepPartial5418<NestedConfig5418>;
  path?: ConfigPaths5418;
}

const HeavyComponent5418 = memo(function HeavyComponent5418({ config }: HeavyProps5418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5418.displayName = 'HeavyComponent5418';
export default HeavyComponent5418;
