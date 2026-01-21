'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2739<T> = T extends (infer U)[]
  ? DeepReadonlyArray2739<U>
  : T extends object
  ? DeepReadonlyObject2739<T>
  : T;

interface DeepReadonlyArray2739<T> extends ReadonlyArray<DeepReadonly2739<T>> {}

type DeepReadonlyObject2739<T> = {
  readonly [P in keyof T]: DeepReadonly2739<T[P]>;
};

type UnionToIntersection2739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2739<T> = UnionToIntersection2739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2739<T extends unknown[], V> = [...T, V];

type TuplifyUnion2739<T, L = LastOf2739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2739<TuplifyUnion2739<Exclude<T, L>>, L>;

type DeepPartial2739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2739<T[P]> }
  : T;

type Paths2739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2739<K, Paths2739<T[K], Prev2739[D]>> : never }[keyof T]
  : never;

type Prev2739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2739 {
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

type ConfigPaths2739 = Paths2739<NestedConfig2739>;

interface HeavyProps2739 {
  config: DeepPartial2739<NestedConfig2739>;
  path?: ConfigPaths2739;
}

const HeavyComponent2739 = memo(function HeavyComponent2739({ config }: HeavyProps2739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2739.displayName = 'HeavyComponent2739';
export default HeavyComponent2739;
