'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5742<T> = T extends (infer U)[]
  ? DeepReadonlyArray5742<U>
  : T extends object
  ? DeepReadonlyObject5742<T>
  : T;

interface DeepReadonlyArray5742<T> extends ReadonlyArray<DeepReadonly5742<T>> {}

type DeepReadonlyObject5742<T> = {
  readonly [P in keyof T]: DeepReadonly5742<T[P]>;
};

type UnionToIntersection5742<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5742<T> = UnionToIntersection5742<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5742<T extends unknown[], V> = [...T, V];

type TuplifyUnion5742<T, L = LastOf5742<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5742<TuplifyUnion5742<Exclude<T, L>>, L>;

type DeepPartial5742<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5742<T[P]> }
  : T;

type Paths5742<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5742<K, Paths5742<T[K], Prev5742[D]>> : never }[keyof T]
  : never;

type Prev5742 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5742<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5742 {
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

type ConfigPaths5742 = Paths5742<NestedConfig5742>;

interface HeavyProps5742 {
  config: DeepPartial5742<NestedConfig5742>;
  path?: ConfigPaths5742;
}

const HeavyComponent5742 = memo(function HeavyComponent5742({ config }: HeavyProps5742) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5742) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5742 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5742: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5742.displayName = 'HeavyComponent5742';
export default HeavyComponent5742;
