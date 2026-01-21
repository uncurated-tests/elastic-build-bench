'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5577<T> = T extends (infer U)[]
  ? DeepReadonlyArray5577<U>
  : T extends object
  ? DeepReadonlyObject5577<T>
  : T;

interface DeepReadonlyArray5577<T> extends ReadonlyArray<DeepReadonly5577<T>> {}

type DeepReadonlyObject5577<T> = {
  readonly [P in keyof T]: DeepReadonly5577<T[P]>;
};

type UnionToIntersection5577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5577<T> = UnionToIntersection5577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5577<T extends unknown[], V> = [...T, V];

type TuplifyUnion5577<T, L = LastOf5577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5577<TuplifyUnion5577<Exclude<T, L>>, L>;

type DeepPartial5577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5577<T[P]> }
  : T;

type Paths5577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5577<K, Paths5577<T[K], Prev5577[D]>> : never }[keyof T]
  : never;

type Prev5577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5577 {
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

type ConfigPaths5577 = Paths5577<NestedConfig5577>;

interface HeavyProps5577 {
  config: DeepPartial5577<NestedConfig5577>;
  path?: ConfigPaths5577;
}

const HeavyComponent5577 = memo(function HeavyComponent5577({ config }: HeavyProps5577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5577.displayName = 'HeavyComponent5577';
export default HeavyComponent5577;
