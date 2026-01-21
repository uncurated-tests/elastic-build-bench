'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5945<T> = T extends (infer U)[]
  ? DeepReadonlyArray5945<U>
  : T extends object
  ? DeepReadonlyObject5945<T>
  : T;

interface DeepReadonlyArray5945<T> extends ReadonlyArray<DeepReadonly5945<T>> {}

type DeepReadonlyObject5945<T> = {
  readonly [P in keyof T]: DeepReadonly5945<T[P]>;
};

type UnionToIntersection5945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5945<T> = UnionToIntersection5945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5945<T extends unknown[], V> = [...T, V];

type TuplifyUnion5945<T, L = LastOf5945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5945<TuplifyUnion5945<Exclude<T, L>>, L>;

type DeepPartial5945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5945<T[P]> }
  : T;

type Paths5945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5945<K, Paths5945<T[K], Prev5945[D]>> : never }[keyof T]
  : never;

type Prev5945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5945 {
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

type ConfigPaths5945 = Paths5945<NestedConfig5945>;

interface HeavyProps5945 {
  config: DeepPartial5945<NestedConfig5945>;
  path?: ConfigPaths5945;
}

const HeavyComponent5945 = memo(function HeavyComponent5945({ config }: HeavyProps5945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5945.displayName = 'HeavyComponent5945';
export default HeavyComponent5945;
