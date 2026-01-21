'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5288<T> = T extends (infer U)[]
  ? DeepReadonlyArray5288<U>
  : T extends object
  ? DeepReadonlyObject5288<T>
  : T;

interface DeepReadonlyArray5288<T> extends ReadonlyArray<DeepReadonly5288<T>> {}

type DeepReadonlyObject5288<T> = {
  readonly [P in keyof T]: DeepReadonly5288<T[P]>;
};

type UnionToIntersection5288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5288<T> = UnionToIntersection5288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5288<T extends unknown[], V> = [...T, V];

type TuplifyUnion5288<T, L = LastOf5288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5288<TuplifyUnion5288<Exclude<T, L>>, L>;

type DeepPartial5288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5288<T[P]> }
  : T;

type Paths5288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5288<K, Paths5288<T[K], Prev5288[D]>> : never }[keyof T]
  : never;

type Prev5288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5288 {
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

type ConfigPaths5288 = Paths5288<NestedConfig5288>;

interface HeavyProps5288 {
  config: DeepPartial5288<NestedConfig5288>;
  path?: ConfigPaths5288;
}

const HeavyComponent5288 = memo(function HeavyComponent5288({ config }: HeavyProps5288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5288.displayName = 'HeavyComponent5288';
export default HeavyComponent5288;
