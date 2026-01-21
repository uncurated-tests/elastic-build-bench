'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5792<T> = T extends (infer U)[]
  ? DeepReadonlyArray5792<U>
  : T extends object
  ? DeepReadonlyObject5792<T>
  : T;

interface DeepReadonlyArray5792<T> extends ReadonlyArray<DeepReadonly5792<T>> {}

type DeepReadonlyObject5792<T> = {
  readonly [P in keyof T]: DeepReadonly5792<T[P]>;
};

type UnionToIntersection5792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5792<T> = UnionToIntersection5792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5792<T extends unknown[], V> = [...T, V];

type TuplifyUnion5792<T, L = LastOf5792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5792<TuplifyUnion5792<Exclude<T, L>>, L>;

type DeepPartial5792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5792<T[P]> }
  : T;

type Paths5792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5792<K, Paths5792<T[K], Prev5792[D]>> : never }[keyof T]
  : never;

type Prev5792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5792 {
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

type ConfigPaths5792 = Paths5792<NestedConfig5792>;

interface HeavyProps5792 {
  config: DeepPartial5792<NestedConfig5792>;
  path?: ConfigPaths5792;
}

const HeavyComponent5792 = memo(function HeavyComponent5792({ config }: HeavyProps5792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5792.displayName = 'HeavyComponent5792';
export default HeavyComponent5792;
