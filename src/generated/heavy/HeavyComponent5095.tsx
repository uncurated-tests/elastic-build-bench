'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5095<T> = T extends (infer U)[]
  ? DeepReadonlyArray5095<U>
  : T extends object
  ? DeepReadonlyObject5095<T>
  : T;

interface DeepReadonlyArray5095<T> extends ReadonlyArray<DeepReadonly5095<T>> {}

type DeepReadonlyObject5095<T> = {
  readonly [P in keyof T]: DeepReadonly5095<T[P]>;
};

type UnionToIntersection5095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5095<T> = UnionToIntersection5095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5095<T extends unknown[], V> = [...T, V];

type TuplifyUnion5095<T, L = LastOf5095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5095<TuplifyUnion5095<Exclude<T, L>>, L>;

type DeepPartial5095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5095<T[P]> }
  : T;

type Paths5095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5095<K, Paths5095<T[K], Prev5095[D]>> : never }[keyof T]
  : never;

type Prev5095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5095 {
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

type ConfigPaths5095 = Paths5095<NestedConfig5095>;

interface HeavyProps5095 {
  config: DeepPartial5095<NestedConfig5095>;
  path?: ConfigPaths5095;
}

const HeavyComponent5095 = memo(function HeavyComponent5095({ config }: HeavyProps5095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5095.displayName = 'HeavyComponent5095';
export default HeavyComponent5095;
