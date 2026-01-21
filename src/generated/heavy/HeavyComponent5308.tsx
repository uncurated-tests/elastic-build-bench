'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5308<T> = T extends (infer U)[]
  ? DeepReadonlyArray5308<U>
  : T extends object
  ? DeepReadonlyObject5308<T>
  : T;

interface DeepReadonlyArray5308<T> extends ReadonlyArray<DeepReadonly5308<T>> {}

type DeepReadonlyObject5308<T> = {
  readonly [P in keyof T]: DeepReadonly5308<T[P]>;
};

type UnionToIntersection5308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5308<T> = UnionToIntersection5308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5308<T extends unknown[], V> = [...T, V];

type TuplifyUnion5308<T, L = LastOf5308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5308<TuplifyUnion5308<Exclude<T, L>>, L>;

type DeepPartial5308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5308<T[P]> }
  : T;

type Paths5308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5308<K, Paths5308<T[K], Prev5308[D]>> : never }[keyof T]
  : never;

type Prev5308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5308 {
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

type ConfigPaths5308 = Paths5308<NestedConfig5308>;

interface HeavyProps5308 {
  config: DeepPartial5308<NestedConfig5308>;
  path?: ConfigPaths5308;
}

const HeavyComponent5308 = memo(function HeavyComponent5308({ config }: HeavyProps5308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5308.displayName = 'HeavyComponent5308';
export default HeavyComponent5308;
