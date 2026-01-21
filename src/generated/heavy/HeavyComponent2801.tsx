'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2801<T> = T extends (infer U)[]
  ? DeepReadonlyArray2801<U>
  : T extends object
  ? DeepReadonlyObject2801<T>
  : T;

interface DeepReadonlyArray2801<T> extends ReadonlyArray<DeepReadonly2801<T>> {}

type DeepReadonlyObject2801<T> = {
  readonly [P in keyof T]: DeepReadonly2801<T[P]>;
};

type UnionToIntersection2801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2801<T> = UnionToIntersection2801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2801<T extends unknown[], V> = [...T, V];

type TuplifyUnion2801<T, L = LastOf2801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2801<TuplifyUnion2801<Exclude<T, L>>, L>;

type DeepPartial2801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2801<T[P]> }
  : T;

type Paths2801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2801<K, Paths2801<T[K], Prev2801[D]>> : never }[keyof T]
  : never;

type Prev2801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2801 {
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

type ConfigPaths2801 = Paths2801<NestedConfig2801>;

interface HeavyProps2801 {
  config: DeepPartial2801<NestedConfig2801>;
  path?: ConfigPaths2801;
}

const HeavyComponent2801 = memo(function HeavyComponent2801({ config }: HeavyProps2801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2801.displayName = 'HeavyComponent2801';
export default HeavyComponent2801;
