'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3897<T> = T extends (infer U)[]
  ? DeepReadonlyArray3897<U>
  : T extends object
  ? DeepReadonlyObject3897<T>
  : T;

interface DeepReadonlyArray3897<T> extends ReadonlyArray<DeepReadonly3897<T>> {}

type DeepReadonlyObject3897<T> = {
  readonly [P in keyof T]: DeepReadonly3897<T[P]>;
};

type UnionToIntersection3897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3897<T> = UnionToIntersection3897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3897<T extends unknown[], V> = [...T, V];

type TuplifyUnion3897<T, L = LastOf3897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3897<TuplifyUnion3897<Exclude<T, L>>, L>;

type DeepPartial3897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3897<T[P]> }
  : T;

type Paths3897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3897<K, Paths3897<T[K], Prev3897[D]>> : never }[keyof T]
  : never;

type Prev3897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3897 {
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

type ConfigPaths3897 = Paths3897<NestedConfig3897>;

interface HeavyProps3897 {
  config: DeepPartial3897<NestedConfig3897>;
  path?: ConfigPaths3897;
}

const HeavyComponent3897 = memo(function HeavyComponent3897({ config }: HeavyProps3897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3897.displayName = 'HeavyComponent3897';
export default HeavyComponent3897;
