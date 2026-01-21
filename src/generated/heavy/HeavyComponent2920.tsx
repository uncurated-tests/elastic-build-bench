'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2920<T> = T extends (infer U)[]
  ? DeepReadonlyArray2920<U>
  : T extends object
  ? DeepReadonlyObject2920<T>
  : T;

interface DeepReadonlyArray2920<T> extends ReadonlyArray<DeepReadonly2920<T>> {}

type DeepReadonlyObject2920<T> = {
  readonly [P in keyof T]: DeepReadonly2920<T[P]>;
};

type UnionToIntersection2920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2920<T> = UnionToIntersection2920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2920<T extends unknown[], V> = [...T, V];

type TuplifyUnion2920<T, L = LastOf2920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2920<TuplifyUnion2920<Exclude<T, L>>, L>;

type DeepPartial2920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2920<T[P]> }
  : T;

type Paths2920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2920<K, Paths2920<T[K], Prev2920[D]>> : never }[keyof T]
  : never;

type Prev2920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2920 {
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

type ConfigPaths2920 = Paths2920<NestedConfig2920>;

interface HeavyProps2920 {
  config: DeepPartial2920<NestedConfig2920>;
  path?: ConfigPaths2920;
}

const HeavyComponent2920 = memo(function HeavyComponent2920({ config }: HeavyProps2920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2920.displayName = 'HeavyComponent2920';
export default HeavyComponent2920;
