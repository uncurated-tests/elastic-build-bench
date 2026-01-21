'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5046<T> = T extends (infer U)[]
  ? DeepReadonlyArray5046<U>
  : T extends object
  ? DeepReadonlyObject5046<T>
  : T;

interface DeepReadonlyArray5046<T> extends ReadonlyArray<DeepReadonly5046<T>> {}

type DeepReadonlyObject5046<T> = {
  readonly [P in keyof T]: DeepReadonly5046<T[P]>;
};

type UnionToIntersection5046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5046<T> = UnionToIntersection5046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5046<T extends unknown[], V> = [...T, V];

type TuplifyUnion5046<T, L = LastOf5046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5046<TuplifyUnion5046<Exclude<T, L>>, L>;

type DeepPartial5046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5046<T[P]> }
  : T;

type Paths5046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5046<K, Paths5046<T[K], Prev5046[D]>> : never }[keyof T]
  : never;

type Prev5046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5046 {
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

type ConfigPaths5046 = Paths5046<NestedConfig5046>;

interface HeavyProps5046 {
  config: DeepPartial5046<NestedConfig5046>;
  path?: ConfigPaths5046;
}

const HeavyComponent5046 = memo(function HeavyComponent5046({ config }: HeavyProps5046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5046.displayName = 'HeavyComponent5046';
export default HeavyComponent5046;
