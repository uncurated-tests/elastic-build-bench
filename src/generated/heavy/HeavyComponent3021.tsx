'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3021<T> = T extends (infer U)[]
  ? DeepReadonlyArray3021<U>
  : T extends object
  ? DeepReadonlyObject3021<T>
  : T;

interface DeepReadonlyArray3021<T> extends ReadonlyArray<DeepReadonly3021<T>> {}

type DeepReadonlyObject3021<T> = {
  readonly [P in keyof T]: DeepReadonly3021<T[P]>;
};

type UnionToIntersection3021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3021<T> = UnionToIntersection3021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3021<T extends unknown[], V> = [...T, V];

type TuplifyUnion3021<T, L = LastOf3021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3021<TuplifyUnion3021<Exclude<T, L>>, L>;

type DeepPartial3021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3021<T[P]> }
  : T;

type Paths3021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3021<K, Paths3021<T[K], Prev3021[D]>> : never }[keyof T]
  : never;

type Prev3021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3021 {
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

type ConfigPaths3021 = Paths3021<NestedConfig3021>;

interface HeavyProps3021 {
  config: DeepPartial3021<NestedConfig3021>;
  path?: ConfigPaths3021;
}

const HeavyComponent3021 = memo(function HeavyComponent3021({ config }: HeavyProps3021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3021.displayName = 'HeavyComponent3021';
export default HeavyComponent3021;
