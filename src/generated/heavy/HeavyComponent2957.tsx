'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2957<T> = T extends (infer U)[]
  ? DeepReadonlyArray2957<U>
  : T extends object
  ? DeepReadonlyObject2957<T>
  : T;

interface DeepReadonlyArray2957<T> extends ReadonlyArray<DeepReadonly2957<T>> {}

type DeepReadonlyObject2957<T> = {
  readonly [P in keyof T]: DeepReadonly2957<T[P]>;
};

type UnionToIntersection2957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2957<T> = UnionToIntersection2957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2957<T extends unknown[], V> = [...T, V];

type TuplifyUnion2957<T, L = LastOf2957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2957<TuplifyUnion2957<Exclude<T, L>>, L>;

type DeepPartial2957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2957<T[P]> }
  : T;

type Paths2957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2957<K, Paths2957<T[K], Prev2957[D]>> : never }[keyof T]
  : never;

type Prev2957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2957 {
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

type ConfigPaths2957 = Paths2957<NestedConfig2957>;

interface HeavyProps2957 {
  config: DeepPartial2957<NestedConfig2957>;
  path?: ConfigPaths2957;
}

const HeavyComponent2957 = memo(function HeavyComponent2957({ config }: HeavyProps2957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2957.displayName = 'HeavyComponent2957';
export default HeavyComponent2957;
