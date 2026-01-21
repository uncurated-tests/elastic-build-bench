'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5708<T> = T extends (infer U)[]
  ? DeepReadonlyArray5708<U>
  : T extends object
  ? DeepReadonlyObject5708<T>
  : T;

interface DeepReadonlyArray5708<T> extends ReadonlyArray<DeepReadonly5708<T>> {}

type DeepReadonlyObject5708<T> = {
  readonly [P in keyof T]: DeepReadonly5708<T[P]>;
};

type UnionToIntersection5708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5708<T> = UnionToIntersection5708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5708<T extends unknown[], V> = [...T, V];

type TuplifyUnion5708<T, L = LastOf5708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5708<TuplifyUnion5708<Exclude<T, L>>, L>;

type DeepPartial5708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5708<T[P]> }
  : T;

type Paths5708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5708<K, Paths5708<T[K], Prev5708[D]>> : never }[keyof T]
  : never;

type Prev5708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5708 {
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

type ConfigPaths5708 = Paths5708<NestedConfig5708>;

interface HeavyProps5708 {
  config: DeepPartial5708<NestedConfig5708>;
  path?: ConfigPaths5708;
}

const HeavyComponent5708 = memo(function HeavyComponent5708({ config }: HeavyProps5708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5708.displayName = 'HeavyComponent5708';
export default HeavyComponent5708;
