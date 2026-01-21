'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5805<T> = T extends (infer U)[]
  ? DeepReadonlyArray5805<U>
  : T extends object
  ? DeepReadonlyObject5805<T>
  : T;

interface DeepReadonlyArray5805<T> extends ReadonlyArray<DeepReadonly5805<T>> {}

type DeepReadonlyObject5805<T> = {
  readonly [P in keyof T]: DeepReadonly5805<T[P]>;
};

type UnionToIntersection5805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5805<T> = UnionToIntersection5805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5805<T extends unknown[], V> = [...T, V];

type TuplifyUnion5805<T, L = LastOf5805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5805<TuplifyUnion5805<Exclude<T, L>>, L>;

type DeepPartial5805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5805<T[P]> }
  : T;

type Paths5805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5805<K, Paths5805<T[K], Prev5805[D]>> : never }[keyof T]
  : never;

type Prev5805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5805 {
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

type ConfigPaths5805 = Paths5805<NestedConfig5805>;

interface HeavyProps5805 {
  config: DeepPartial5805<NestedConfig5805>;
  path?: ConfigPaths5805;
}

const HeavyComponent5805 = memo(function HeavyComponent5805({ config }: HeavyProps5805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5805.displayName = 'HeavyComponent5805';
export default HeavyComponent5805;
