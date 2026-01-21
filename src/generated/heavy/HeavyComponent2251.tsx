'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2251<T> = T extends (infer U)[]
  ? DeepReadonlyArray2251<U>
  : T extends object
  ? DeepReadonlyObject2251<T>
  : T;

interface DeepReadonlyArray2251<T> extends ReadonlyArray<DeepReadonly2251<T>> {}

type DeepReadonlyObject2251<T> = {
  readonly [P in keyof T]: DeepReadonly2251<T[P]>;
};

type UnionToIntersection2251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2251<T> = UnionToIntersection2251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2251<T extends unknown[], V> = [...T, V];

type TuplifyUnion2251<T, L = LastOf2251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2251<TuplifyUnion2251<Exclude<T, L>>, L>;

type DeepPartial2251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2251<T[P]> }
  : T;

type Paths2251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2251<K, Paths2251<T[K], Prev2251[D]>> : never }[keyof T]
  : never;

type Prev2251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2251 {
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

type ConfigPaths2251 = Paths2251<NestedConfig2251>;

interface HeavyProps2251 {
  config: DeepPartial2251<NestedConfig2251>;
  path?: ConfigPaths2251;
}

const HeavyComponent2251 = memo(function HeavyComponent2251({ config }: HeavyProps2251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2251.displayName = 'HeavyComponent2251';
export default HeavyComponent2251;
