'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2227<T> = T extends (infer U)[]
  ? DeepReadonlyArray2227<U>
  : T extends object
  ? DeepReadonlyObject2227<T>
  : T;

interface DeepReadonlyArray2227<T> extends ReadonlyArray<DeepReadonly2227<T>> {}

type DeepReadonlyObject2227<T> = {
  readonly [P in keyof T]: DeepReadonly2227<T[P]>;
};

type UnionToIntersection2227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2227<T> = UnionToIntersection2227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2227<T extends unknown[], V> = [...T, V];

type TuplifyUnion2227<T, L = LastOf2227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2227<TuplifyUnion2227<Exclude<T, L>>, L>;

type DeepPartial2227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2227<T[P]> }
  : T;

type Paths2227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2227<K, Paths2227<T[K], Prev2227[D]>> : never }[keyof T]
  : never;

type Prev2227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2227 {
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

type ConfigPaths2227 = Paths2227<NestedConfig2227>;

interface HeavyProps2227 {
  config: DeepPartial2227<NestedConfig2227>;
  path?: ConfigPaths2227;
}

const HeavyComponent2227 = memo(function HeavyComponent2227({ config }: HeavyProps2227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2227.displayName = 'HeavyComponent2227';
export default HeavyComponent2227;
