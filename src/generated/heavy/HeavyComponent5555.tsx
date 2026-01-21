'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5555<T> = T extends (infer U)[]
  ? DeepReadonlyArray5555<U>
  : T extends object
  ? DeepReadonlyObject5555<T>
  : T;

interface DeepReadonlyArray5555<T> extends ReadonlyArray<DeepReadonly5555<T>> {}

type DeepReadonlyObject5555<T> = {
  readonly [P in keyof T]: DeepReadonly5555<T[P]>;
};

type UnionToIntersection5555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5555<T> = UnionToIntersection5555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5555<T extends unknown[], V> = [...T, V];

type TuplifyUnion5555<T, L = LastOf5555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5555<TuplifyUnion5555<Exclude<T, L>>, L>;

type DeepPartial5555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5555<T[P]> }
  : T;

type Paths5555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5555<K, Paths5555<T[K], Prev5555[D]>> : never }[keyof T]
  : never;

type Prev5555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5555 {
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

type ConfigPaths5555 = Paths5555<NestedConfig5555>;

interface HeavyProps5555 {
  config: DeepPartial5555<NestedConfig5555>;
  path?: ConfigPaths5555;
}

const HeavyComponent5555 = memo(function HeavyComponent5555({ config }: HeavyProps5555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5555.displayName = 'HeavyComponent5555';
export default HeavyComponent5555;
