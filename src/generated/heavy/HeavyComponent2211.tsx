'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2211<T> = T extends (infer U)[]
  ? DeepReadonlyArray2211<U>
  : T extends object
  ? DeepReadonlyObject2211<T>
  : T;

interface DeepReadonlyArray2211<T> extends ReadonlyArray<DeepReadonly2211<T>> {}

type DeepReadonlyObject2211<T> = {
  readonly [P in keyof T]: DeepReadonly2211<T[P]>;
};

type UnionToIntersection2211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2211<T> = UnionToIntersection2211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2211<T extends unknown[], V> = [...T, V];

type TuplifyUnion2211<T, L = LastOf2211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2211<TuplifyUnion2211<Exclude<T, L>>, L>;

type DeepPartial2211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2211<T[P]> }
  : T;

type Paths2211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2211<K, Paths2211<T[K], Prev2211[D]>> : never }[keyof T]
  : never;

type Prev2211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2211 {
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

type ConfigPaths2211 = Paths2211<NestedConfig2211>;

interface HeavyProps2211 {
  config: DeepPartial2211<NestedConfig2211>;
  path?: ConfigPaths2211;
}

const HeavyComponent2211 = memo(function HeavyComponent2211({ config }: HeavyProps2211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2211.displayName = 'HeavyComponent2211';
export default HeavyComponent2211;
