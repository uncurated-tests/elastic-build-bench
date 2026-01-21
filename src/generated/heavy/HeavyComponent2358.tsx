'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2358<T> = T extends (infer U)[]
  ? DeepReadonlyArray2358<U>
  : T extends object
  ? DeepReadonlyObject2358<T>
  : T;

interface DeepReadonlyArray2358<T> extends ReadonlyArray<DeepReadonly2358<T>> {}

type DeepReadonlyObject2358<T> = {
  readonly [P in keyof T]: DeepReadonly2358<T[P]>;
};

type UnionToIntersection2358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2358<T> = UnionToIntersection2358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2358<T extends unknown[], V> = [...T, V];

type TuplifyUnion2358<T, L = LastOf2358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2358<TuplifyUnion2358<Exclude<T, L>>, L>;

type DeepPartial2358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2358<T[P]> }
  : T;

type Paths2358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2358<K, Paths2358<T[K], Prev2358[D]>> : never }[keyof T]
  : never;

type Prev2358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2358 {
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

type ConfigPaths2358 = Paths2358<NestedConfig2358>;

interface HeavyProps2358 {
  config: DeepPartial2358<NestedConfig2358>;
  path?: ConfigPaths2358;
}

const HeavyComponent2358 = memo(function HeavyComponent2358({ config }: HeavyProps2358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2358.displayName = 'HeavyComponent2358';
export default HeavyComponent2358;
