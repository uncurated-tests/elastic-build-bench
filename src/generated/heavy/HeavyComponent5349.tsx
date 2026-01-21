'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5349<T> = T extends (infer U)[]
  ? DeepReadonlyArray5349<U>
  : T extends object
  ? DeepReadonlyObject5349<T>
  : T;

interface DeepReadonlyArray5349<T> extends ReadonlyArray<DeepReadonly5349<T>> {}

type DeepReadonlyObject5349<T> = {
  readonly [P in keyof T]: DeepReadonly5349<T[P]>;
};

type UnionToIntersection5349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5349<T> = UnionToIntersection5349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5349<T extends unknown[], V> = [...T, V];

type TuplifyUnion5349<T, L = LastOf5349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5349<TuplifyUnion5349<Exclude<T, L>>, L>;

type DeepPartial5349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5349<T[P]> }
  : T;

type Paths5349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5349<K, Paths5349<T[K], Prev5349[D]>> : never }[keyof T]
  : never;

type Prev5349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5349 {
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

type ConfigPaths5349 = Paths5349<NestedConfig5349>;

interface HeavyProps5349 {
  config: DeepPartial5349<NestedConfig5349>;
  path?: ConfigPaths5349;
}

const HeavyComponent5349 = memo(function HeavyComponent5349({ config }: HeavyProps5349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5349.displayName = 'HeavyComponent5349';
export default HeavyComponent5349;
