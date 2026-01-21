'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3440<T> = T extends (infer U)[]
  ? DeepReadonlyArray3440<U>
  : T extends object
  ? DeepReadonlyObject3440<T>
  : T;

interface DeepReadonlyArray3440<T> extends ReadonlyArray<DeepReadonly3440<T>> {}

type DeepReadonlyObject3440<T> = {
  readonly [P in keyof T]: DeepReadonly3440<T[P]>;
};

type UnionToIntersection3440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3440<T> = UnionToIntersection3440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3440<T extends unknown[], V> = [...T, V];

type TuplifyUnion3440<T, L = LastOf3440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3440<TuplifyUnion3440<Exclude<T, L>>, L>;

type DeepPartial3440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3440<T[P]> }
  : T;

type Paths3440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3440<K, Paths3440<T[K], Prev3440[D]>> : never }[keyof T]
  : never;

type Prev3440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3440 {
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

type ConfigPaths3440 = Paths3440<NestedConfig3440>;

interface HeavyProps3440 {
  config: DeepPartial3440<NestedConfig3440>;
  path?: ConfigPaths3440;
}

const HeavyComponent3440 = memo(function HeavyComponent3440({ config }: HeavyProps3440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3440.displayName = 'HeavyComponent3440';
export default HeavyComponent3440;
