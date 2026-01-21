'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2888<T> = T extends (infer U)[]
  ? DeepReadonlyArray2888<U>
  : T extends object
  ? DeepReadonlyObject2888<T>
  : T;

interface DeepReadonlyArray2888<T> extends ReadonlyArray<DeepReadonly2888<T>> {}

type DeepReadonlyObject2888<T> = {
  readonly [P in keyof T]: DeepReadonly2888<T[P]>;
};

type UnionToIntersection2888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2888<T> = UnionToIntersection2888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2888<T extends unknown[], V> = [...T, V];

type TuplifyUnion2888<T, L = LastOf2888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2888<TuplifyUnion2888<Exclude<T, L>>, L>;

type DeepPartial2888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2888<T[P]> }
  : T;

type Paths2888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2888<K, Paths2888<T[K], Prev2888[D]>> : never }[keyof T]
  : never;

type Prev2888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2888 {
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

type ConfigPaths2888 = Paths2888<NestedConfig2888>;

interface HeavyProps2888 {
  config: DeepPartial2888<NestedConfig2888>;
  path?: ConfigPaths2888;
}

const HeavyComponent2888 = memo(function HeavyComponent2888({ config }: HeavyProps2888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2888.displayName = 'HeavyComponent2888';
export default HeavyComponent2888;
