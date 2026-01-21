'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5547<T> = T extends (infer U)[]
  ? DeepReadonlyArray5547<U>
  : T extends object
  ? DeepReadonlyObject5547<T>
  : T;

interface DeepReadonlyArray5547<T> extends ReadonlyArray<DeepReadonly5547<T>> {}

type DeepReadonlyObject5547<T> = {
  readonly [P in keyof T]: DeepReadonly5547<T[P]>;
};

type UnionToIntersection5547<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5547<T> = UnionToIntersection5547<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5547<T extends unknown[], V> = [...T, V];

type TuplifyUnion5547<T, L = LastOf5547<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5547<TuplifyUnion5547<Exclude<T, L>>, L>;

type DeepPartial5547<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5547<T[P]> }
  : T;

type Paths5547<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5547<K, Paths5547<T[K], Prev5547[D]>> : never }[keyof T]
  : never;

type Prev5547 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5547<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5547 {
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

type ConfigPaths5547 = Paths5547<NestedConfig5547>;

interface HeavyProps5547 {
  config: DeepPartial5547<NestedConfig5547>;
  path?: ConfigPaths5547;
}

const HeavyComponent5547 = memo(function HeavyComponent5547({ config }: HeavyProps5547) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5547) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5547 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5547: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5547.displayName = 'HeavyComponent5547';
export default HeavyComponent5547;
