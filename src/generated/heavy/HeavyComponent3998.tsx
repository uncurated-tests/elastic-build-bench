'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3998<T> = T extends (infer U)[]
  ? DeepReadonlyArray3998<U>
  : T extends object
  ? DeepReadonlyObject3998<T>
  : T;

interface DeepReadonlyArray3998<T> extends ReadonlyArray<DeepReadonly3998<T>> {}

type DeepReadonlyObject3998<T> = {
  readonly [P in keyof T]: DeepReadonly3998<T[P]>;
};

type UnionToIntersection3998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3998<T> = UnionToIntersection3998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3998<T extends unknown[], V> = [...T, V];

type TuplifyUnion3998<T, L = LastOf3998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3998<TuplifyUnion3998<Exclude<T, L>>, L>;

type DeepPartial3998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3998<T[P]> }
  : T;

type Paths3998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3998<K, Paths3998<T[K], Prev3998[D]>> : never }[keyof T]
  : never;

type Prev3998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3998 {
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

type ConfigPaths3998 = Paths3998<NestedConfig3998>;

interface HeavyProps3998 {
  config: DeepPartial3998<NestedConfig3998>;
  path?: ConfigPaths3998;
}

const HeavyComponent3998 = memo(function HeavyComponent3998({ config }: HeavyProps3998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3998.displayName = 'HeavyComponent3998';
export default HeavyComponent3998;
