'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5894<T> = T extends (infer U)[]
  ? DeepReadonlyArray5894<U>
  : T extends object
  ? DeepReadonlyObject5894<T>
  : T;

interface DeepReadonlyArray5894<T> extends ReadonlyArray<DeepReadonly5894<T>> {}

type DeepReadonlyObject5894<T> = {
  readonly [P in keyof T]: DeepReadonly5894<T[P]>;
};

type UnionToIntersection5894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5894<T> = UnionToIntersection5894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5894<T extends unknown[], V> = [...T, V];

type TuplifyUnion5894<T, L = LastOf5894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5894<TuplifyUnion5894<Exclude<T, L>>, L>;

type DeepPartial5894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5894<T[P]> }
  : T;

type Paths5894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5894<K, Paths5894<T[K], Prev5894[D]>> : never }[keyof T]
  : never;

type Prev5894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5894 {
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

type ConfigPaths5894 = Paths5894<NestedConfig5894>;

interface HeavyProps5894 {
  config: DeepPartial5894<NestedConfig5894>;
  path?: ConfigPaths5894;
}

const HeavyComponent5894 = memo(function HeavyComponent5894({ config }: HeavyProps5894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5894.displayName = 'HeavyComponent5894';
export default HeavyComponent5894;
