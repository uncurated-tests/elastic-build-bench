'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5732<T> = T extends (infer U)[]
  ? DeepReadonlyArray5732<U>
  : T extends object
  ? DeepReadonlyObject5732<T>
  : T;

interface DeepReadonlyArray5732<T> extends ReadonlyArray<DeepReadonly5732<T>> {}

type DeepReadonlyObject5732<T> = {
  readonly [P in keyof T]: DeepReadonly5732<T[P]>;
};

type UnionToIntersection5732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5732<T> = UnionToIntersection5732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5732<T extends unknown[], V> = [...T, V];

type TuplifyUnion5732<T, L = LastOf5732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5732<TuplifyUnion5732<Exclude<T, L>>, L>;

type DeepPartial5732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5732<T[P]> }
  : T;

type Paths5732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5732<K, Paths5732<T[K], Prev5732[D]>> : never }[keyof T]
  : never;

type Prev5732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5732 {
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

type ConfigPaths5732 = Paths5732<NestedConfig5732>;

interface HeavyProps5732 {
  config: DeepPartial5732<NestedConfig5732>;
  path?: ConfigPaths5732;
}

const HeavyComponent5732 = memo(function HeavyComponent5732({ config }: HeavyProps5732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5732.displayName = 'HeavyComponent5732';
export default HeavyComponent5732;
