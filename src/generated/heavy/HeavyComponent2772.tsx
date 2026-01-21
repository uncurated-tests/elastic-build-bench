'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2772<T> = T extends (infer U)[]
  ? DeepReadonlyArray2772<U>
  : T extends object
  ? DeepReadonlyObject2772<T>
  : T;

interface DeepReadonlyArray2772<T> extends ReadonlyArray<DeepReadonly2772<T>> {}

type DeepReadonlyObject2772<T> = {
  readonly [P in keyof T]: DeepReadonly2772<T[P]>;
};

type UnionToIntersection2772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2772<T> = UnionToIntersection2772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2772<T extends unknown[], V> = [...T, V];

type TuplifyUnion2772<T, L = LastOf2772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2772<TuplifyUnion2772<Exclude<T, L>>, L>;

type DeepPartial2772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2772<T[P]> }
  : T;

type Paths2772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2772<K, Paths2772<T[K], Prev2772[D]>> : never }[keyof T]
  : never;

type Prev2772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2772 {
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

type ConfigPaths2772 = Paths2772<NestedConfig2772>;

interface HeavyProps2772 {
  config: DeepPartial2772<NestedConfig2772>;
  path?: ConfigPaths2772;
}

const HeavyComponent2772 = memo(function HeavyComponent2772({ config }: HeavyProps2772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2772.displayName = 'HeavyComponent2772';
export default HeavyComponent2772;
