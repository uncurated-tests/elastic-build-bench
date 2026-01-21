'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5279<T> = T extends (infer U)[]
  ? DeepReadonlyArray5279<U>
  : T extends object
  ? DeepReadonlyObject5279<T>
  : T;

interface DeepReadonlyArray5279<T> extends ReadonlyArray<DeepReadonly5279<T>> {}

type DeepReadonlyObject5279<T> = {
  readonly [P in keyof T]: DeepReadonly5279<T[P]>;
};

type UnionToIntersection5279<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5279<T> = UnionToIntersection5279<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5279<T extends unknown[], V> = [...T, V];

type TuplifyUnion5279<T, L = LastOf5279<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5279<TuplifyUnion5279<Exclude<T, L>>, L>;

type DeepPartial5279<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5279<T[P]> }
  : T;

type Paths5279<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5279<K, Paths5279<T[K], Prev5279[D]>> : never }[keyof T]
  : never;

type Prev5279 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5279<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5279 {
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

type ConfigPaths5279 = Paths5279<NestedConfig5279>;

interface HeavyProps5279 {
  config: DeepPartial5279<NestedConfig5279>;
  path?: ConfigPaths5279;
}

const HeavyComponent5279 = memo(function HeavyComponent5279({ config }: HeavyProps5279) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5279) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5279 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5279: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5279.displayName = 'HeavyComponent5279';
export default HeavyComponent5279;
