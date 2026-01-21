'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5360<T> = T extends (infer U)[]
  ? DeepReadonlyArray5360<U>
  : T extends object
  ? DeepReadonlyObject5360<T>
  : T;

interface DeepReadonlyArray5360<T> extends ReadonlyArray<DeepReadonly5360<T>> {}

type DeepReadonlyObject5360<T> = {
  readonly [P in keyof T]: DeepReadonly5360<T[P]>;
};

type UnionToIntersection5360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5360<T> = UnionToIntersection5360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5360<T extends unknown[], V> = [...T, V];

type TuplifyUnion5360<T, L = LastOf5360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5360<TuplifyUnion5360<Exclude<T, L>>, L>;

type DeepPartial5360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5360<T[P]> }
  : T;

type Paths5360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5360<K, Paths5360<T[K], Prev5360[D]>> : never }[keyof T]
  : never;

type Prev5360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5360 {
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

type ConfigPaths5360 = Paths5360<NestedConfig5360>;

interface HeavyProps5360 {
  config: DeepPartial5360<NestedConfig5360>;
  path?: ConfigPaths5360;
}

const HeavyComponent5360 = memo(function HeavyComponent5360({ config }: HeavyProps5360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5360.displayName = 'HeavyComponent5360';
export default HeavyComponent5360;
