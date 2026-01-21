'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5722<T> = T extends (infer U)[]
  ? DeepReadonlyArray5722<U>
  : T extends object
  ? DeepReadonlyObject5722<T>
  : T;

interface DeepReadonlyArray5722<T> extends ReadonlyArray<DeepReadonly5722<T>> {}

type DeepReadonlyObject5722<T> = {
  readonly [P in keyof T]: DeepReadonly5722<T[P]>;
};

type UnionToIntersection5722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5722<T> = UnionToIntersection5722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5722<T extends unknown[], V> = [...T, V];

type TuplifyUnion5722<T, L = LastOf5722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5722<TuplifyUnion5722<Exclude<T, L>>, L>;

type DeepPartial5722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5722<T[P]> }
  : T;

type Paths5722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5722<K, Paths5722<T[K], Prev5722[D]>> : never }[keyof T]
  : never;

type Prev5722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5722 {
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

type ConfigPaths5722 = Paths5722<NestedConfig5722>;

interface HeavyProps5722 {
  config: DeepPartial5722<NestedConfig5722>;
  path?: ConfigPaths5722;
}

const HeavyComponent5722 = memo(function HeavyComponent5722({ config }: HeavyProps5722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5722.displayName = 'HeavyComponent5722';
export default HeavyComponent5722;
