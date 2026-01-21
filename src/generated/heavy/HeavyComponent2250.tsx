'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2250<T> = T extends (infer U)[]
  ? DeepReadonlyArray2250<U>
  : T extends object
  ? DeepReadonlyObject2250<T>
  : T;

interface DeepReadonlyArray2250<T> extends ReadonlyArray<DeepReadonly2250<T>> {}

type DeepReadonlyObject2250<T> = {
  readonly [P in keyof T]: DeepReadonly2250<T[P]>;
};

type UnionToIntersection2250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2250<T> = UnionToIntersection2250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2250<T extends unknown[], V> = [...T, V];

type TuplifyUnion2250<T, L = LastOf2250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2250<TuplifyUnion2250<Exclude<T, L>>, L>;

type DeepPartial2250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2250<T[P]> }
  : T;

type Paths2250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2250<K, Paths2250<T[K], Prev2250[D]>> : never }[keyof T]
  : never;

type Prev2250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2250 {
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

type ConfigPaths2250 = Paths2250<NestedConfig2250>;

interface HeavyProps2250 {
  config: DeepPartial2250<NestedConfig2250>;
  path?: ConfigPaths2250;
}

const HeavyComponent2250 = memo(function HeavyComponent2250({ config }: HeavyProps2250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2250.displayName = 'HeavyComponent2250';
export default HeavyComponent2250;
