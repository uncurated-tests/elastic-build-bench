'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5423<T> = T extends (infer U)[]
  ? DeepReadonlyArray5423<U>
  : T extends object
  ? DeepReadonlyObject5423<T>
  : T;

interface DeepReadonlyArray5423<T> extends ReadonlyArray<DeepReadonly5423<T>> {}

type DeepReadonlyObject5423<T> = {
  readonly [P in keyof T]: DeepReadonly5423<T[P]>;
};

type UnionToIntersection5423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5423<T> = UnionToIntersection5423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5423<T extends unknown[], V> = [...T, V];

type TuplifyUnion5423<T, L = LastOf5423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5423<TuplifyUnion5423<Exclude<T, L>>, L>;

type DeepPartial5423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5423<T[P]> }
  : T;

type Paths5423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5423<K, Paths5423<T[K], Prev5423[D]>> : never }[keyof T]
  : never;

type Prev5423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5423 {
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

type ConfigPaths5423 = Paths5423<NestedConfig5423>;

interface HeavyProps5423 {
  config: DeepPartial5423<NestedConfig5423>;
  path?: ConfigPaths5423;
}

const HeavyComponent5423 = memo(function HeavyComponent5423({ config }: HeavyProps5423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5423.displayName = 'HeavyComponent5423';
export default HeavyComponent5423;
