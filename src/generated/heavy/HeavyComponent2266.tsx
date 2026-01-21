'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2266<T> = T extends (infer U)[]
  ? DeepReadonlyArray2266<U>
  : T extends object
  ? DeepReadonlyObject2266<T>
  : T;

interface DeepReadonlyArray2266<T> extends ReadonlyArray<DeepReadonly2266<T>> {}

type DeepReadonlyObject2266<T> = {
  readonly [P in keyof T]: DeepReadonly2266<T[P]>;
};

type UnionToIntersection2266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2266<T> = UnionToIntersection2266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2266<T extends unknown[], V> = [...T, V];

type TuplifyUnion2266<T, L = LastOf2266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2266<TuplifyUnion2266<Exclude<T, L>>, L>;

type DeepPartial2266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2266<T[P]> }
  : T;

type Paths2266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2266<K, Paths2266<T[K], Prev2266[D]>> : never }[keyof T]
  : never;

type Prev2266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2266 {
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

type ConfigPaths2266 = Paths2266<NestedConfig2266>;

interface HeavyProps2266 {
  config: DeepPartial2266<NestedConfig2266>;
  path?: ConfigPaths2266;
}

const HeavyComponent2266 = memo(function HeavyComponent2266({ config }: HeavyProps2266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2266.displayName = 'HeavyComponent2266';
export default HeavyComponent2266;
