'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5971<T> = T extends (infer U)[]
  ? DeepReadonlyArray5971<U>
  : T extends object
  ? DeepReadonlyObject5971<T>
  : T;

interface DeepReadonlyArray5971<T> extends ReadonlyArray<DeepReadonly5971<T>> {}

type DeepReadonlyObject5971<T> = {
  readonly [P in keyof T]: DeepReadonly5971<T[P]>;
};

type UnionToIntersection5971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5971<T> = UnionToIntersection5971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5971<T extends unknown[], V> = [...T, V];

type TuplifyUnion5971<T, L = LastOf5971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5971<TuplifyUnion5971<Exclude<T, L>>, L>;

type DeepPartial5971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5971<T[P]> }
  : T;

type Paths5971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5971<K, Paths5971<T[K], Prev5971[D]>> : never }[keyof T]
  : never;

type Prev5971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5971 {
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

type ConfigPaths5971 = Paths5971<NestedConfig5971>;

interface HeavyProps5971 {
  config: DeepPartial5971<NestedConfig5971>;
  path?: ConfigPaths5971;
}

const HeavyComponent5971 = memo(function HeavyComponent5971({ config }: HeavyProps5971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5971.displayName = 'HeavyComponent5971';
export default HeavyComponent5971;
