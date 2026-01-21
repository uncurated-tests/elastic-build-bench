'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2440<T> = T extends (infer U)[]
  ? DeepReadonlyArray2440<U>
  : T extends object
  ? DeepReadonlyObject2440<T>
  : T;

interface DeepReadonlyArray2440<T> extends ReadonlyArray<DeepReadonly2440<T>> {}

type DeepReadonlyObject2440<T> = {
  readonly [P in keyof T]: DeepReadonly2440<T[P]>;
};

type UnionToIntersection2440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2440<T> = UnionToIntersection2440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2440<T extends unknown[], V> = [...T, V];

type TuplifyUnion2440<T, L = LastOf2440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2440<TuplifyUnion2440<Exclude<T, L>>, L>;

type DeepPartial2440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2440<T[P]> }
  : T;

type Paths2440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2440<K, Paths2440<T[K], Prev2440[D]>> : never }[keyof T]
  : never;

type Prev2440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2440 {
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

type ConfigPaths2440 = Paths2440<NestedConfig2440>;

interface HeavyProps2440 {
  config: DeepPartial2440<NestedConfig2440>;
  path?: ConfigPaths2440;
}

const HeavyComponent2440 = memo(function HeavyComponent2440({ config }: HeavyProps2440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2440.displayName = 'HeavyComponent2440';
export default HeavyComponent2440;
