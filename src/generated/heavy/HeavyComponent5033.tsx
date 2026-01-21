'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5033<T> = T extends (infer U)[]
  ? DeepReadonlyArray5033<U>
  : T extends object
  ? DeepReadonlyObject5033<T>
  : T;

interface DeepReadonlyArray5033<T> extends ReadonlyArray<DeepReadonly5033<T>> {}

type DeepReadonlyObject5033<T> = {
  readonly [P in keyof T]: DeepReadonly5033<T[P]>;
};

type UnionToIntersection5033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5033<T> = UnionToIntersection5033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5033<T extends unknown[], V> = [...T, V];

type TuplifyUnion5033<T, L = LastOf5033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5033<TuplifyUnion5033<Exclude<T, L>>, L>;

type DeepPartial5033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5033<T[P]> }
  : T;

type Paths5033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5033<K, Paths5033<T[K], Prev5033[D]>> : never }[keyof T]
  : never;

type Prev5033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5033 {
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

type ConfigPaths5033 = Paths5033<NestedConfig5033>;

interface HeavyProps5033 {
  config: DeepPartial5033<NestedConfig5033>;
  path?: ConfigPaths5033;
}

const HeavyComponent5033 = memo(function HeavyComponent5033({ config }: HeavyProps5033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5033.displayName = 'HeavyComponent5033';
export default HeavyComponent5033;
