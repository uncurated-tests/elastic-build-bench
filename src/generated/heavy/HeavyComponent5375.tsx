'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5375<T> = T extends (infer U)[]
  ? DeepReadonlyArray5375<U>
  : T extends object
  ? DeepReadonlyObject5375<T>
  : T;

interface DeepReadonlyArray5375<T> extends ReadonlyArray<DeepReadonly5375<T>> {}

type DeepReadonlyObject5375<T> = {
  readonly [P in keyof T]: DeepReadonly5375<T[P]>;
};

type UnionToIntersection5375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5375<T> = UnionToIntersection5375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5375<T extends unknown[], V> = [...T, V];

type TuplifyUnion5375<T, L = LastOf5375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5375<TuplifyUnion5375<Exclude<T, L>>, L>;

type DeepPartial5375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5375<T[P]> }
  : T;

type Paths5375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5375<K, Paths5375<T[K], Prev5375[D]>> : never }[keyof T]
  : never;

type Prev5375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5375 {
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

type ConfigPaths5375 = Paths5375<NestedConfig5375>;

interface HeavyProps5375 {
  config: DeepPartial5375<NestedConfig5375>;
  path?: ConfigPaths5375;
}

const HeavyComponent5375 = memo(function HeavyComponent5375({ config }: HeavyProps5375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5375.displayName = 'HeavyComponent5375';
export default HeavyComponent5375;
