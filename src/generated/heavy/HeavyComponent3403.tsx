'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3403<T> = T extends (infer U)[]
  ? DeepReadonlyArray3403<U>
  : T extends object
  ? DeepReadonlyObject3403<T>
  : T;

interface DeepReadonlyArray3403<T> extends ReadonlyArray<DeepReadonly3403<T>> {}

type DeepReadonlyObject3403<T> = {
  readonly [P in keyof T]: DeepReadonly3403<T[P]>;
};

type UnionToIntersection3403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3403<T> = UnionToIntersection3403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3403<T extends unknown[], V> = [...T, V];

type TuplifyUnion3403<T, L = LastOf3403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3403<TuplifyUnion3403<Exclude<T, L>>, L>;

type DeepPartial3403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3403<T[P]> }
  : T;

type Paths3403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3403<K, Paths3403<T[K], Prev3403[D]>> : never }[keyof T]
  : never;

type Prev3403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3403 {
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

type ConfigPaths3403 = Paths3403<NestedConfig3403>;

interface HeavyProps3403 {
  config: DeepPartial3403<NestedConfig3403>;
  path?: ConfigPaths3403;
}

const HeavyComponent3403 = memo(function HeavyComponent3403({ config }: HeavyProps3403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3403.displayName = 'HeavyComponent3403';
export default HeavyComponent3403;
