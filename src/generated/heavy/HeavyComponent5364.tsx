'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5364<T> = T extends (infer U)[]
  ? DeepReadonlyArray5364<U>
  : T extends object
  ? DeepReadonlyObject5364<T>
  : T;

interface DeepReadonlyArray5364<T> extends ReadonlyArray<DeepReadonly5364<T>> {}

type DeepReadonlyObject5364<T> = {
  readonly [P in keyof T]: DeepReadonly5364<T[P]>;
};

type UnionToIntersection5364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5364<T> = UnionToIntersection5364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5364<T extends unknown[], V> = [...T, V];

type TuplifyUnion5364<T, L = LastOf5364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5364<TuplifyUnion5364<Exclude<T, L>>, L>;

type DeepPartial5364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5364<T[P]> }
  : T;

type Paths5364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5364<K, Paths5364<T[K], Prev5364[D]>> : never }[keyof T]
  : never;

type Prev5364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5364 {
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

type ConfigPaths5364 = Paths5364<NestedConfig5364>;

interface HeavyProps5364 {
  config: DeepPartial5364<NestedConfig5364>;
  path?: ConfigPaths5364;
}

const HeavyComponent5364 = memo(function HeavyComponent5364({ config }: HeavyProps5364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5364.displayName = 'HeavyComponent5364';
export default HeavyComponent5364;
