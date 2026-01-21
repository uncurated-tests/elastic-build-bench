'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2206<T> = T extends (infer U)[]
  ? DeepReadonlyArray2206<U>
  : T extends object
  ? DeepReadonlyObject2206<T>
  : T;

interface DeepReadonlyArray2206<T> extends ReadonlyArray<DeepReadonly2206<T>> {}

type DeepReadonlyObject2206<T> = {
  readonly [P in keyof T]: DeepReadonly2206<T[P]>;
};

type UnionToIntersection2206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2206<T> = UnionToIntersection2206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2206<T extends unknown[], V> = [...T, V];

type TuplifyUnion2206<T, L = LastOf2206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2206<TuplifyUnion2206<Exclude<T, L>>, L>;

type DeepPartial2206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2206<T[P]> }
  : T;

type Paths2206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2206<K, Paths2206<T[K], Prev2206[D]>> : never }[keyof T]
  : never;

type Prev2206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2206 {
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

type ConfigPaths2206 = Paths2206<NestedConfig2206>;

interface HeavyProps2206 {
  config: DeepPartial2206<NestedConfig2206>;
  path?: ConfigPaths2206;
}

const HeavyComponent2206 = memo(function HeavyComponent2206({ config }: HeavyProps2206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2206.displayName = 'HeavyComponent2206';
export default HeavyComponent2206;
