'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5326<T> = T extends (infer U)[]
  ? DeepReadonlyArray5326<U>
  : T extends object
  ? DeepReadonlyObject5326<T>
  : T;

interface DeepReadonlyArray5326<T> extends ReadonlyArray<DeepReadonly5326<T>> {}

type DeepReadonlyObject5326<T> = {
  readonly [P in keyof T]: DeepReadonly5326<T[P]>;
};

type UnionToIntersection5326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5326<T> = UnionToIntersection5326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5326<T extends unknown[], V> = [...T, V];

type TuplifyUnion5326<T, L = LastOf5326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5326<TuplifyUnion5326<Exclude<T, L>>, L>;

type DeepPartial5326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5326<T[P]> }
  : T;

type Paths5326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5326<K, Paths5326<T[K], Prev5326[D]>> : never }[keyof T]
  : never;

type Prev5326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5326 {
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

type ConfigPaths5326 = Paths5326<NestedConfig5326>;

interface HeavyProps5326 {
  config: DeepPartial5326<NestedConfig5326>;
  path?: ConfigPaths5326;
}

const HeavyComponent5326 = memo(function HeavyComponent5326({ config }: HeavyProps5326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5326.displayName = 'HeavyComponent5326';
export default HeavyComponent5326;
