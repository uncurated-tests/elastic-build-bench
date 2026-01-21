'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3090<T> = T extends (infer U)[]
  ? DeepReadonlyArray3090<U>
  : T extends object
  ? DeepReadonlyObject3090<T>
  : T;

interface DeepReadonlyArray3090<T> extends ReadonlyArray<DeepReadonly3090<T>> {}

type DeepReadonlyObject3090<T> = {
  readonly [P in keyof T]: DeepReadonly3090<T[P]>;
};

type UnionToIntersection3090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3090<T> = UnionToIntersection3090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3090<T extends unknown[], V> = [...T, V];

type TuplifyUnion3090<T, L = LastOf3090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3090<TuplifyUnion3090<Exclude<T, L>>, L>;

type DeepPartial3090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3090<T[P]> }
  : T;

type Paths3090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3090<K, Paths3090<T[K], Prev3090[D]>> : never }[keyof T]
  : never;

type Prev3090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3090 {
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

type ConfigPaths3090 = Paths3090<NestedConfig3090>;

interface HeavyProps3090 {
  config: DeepPartial3090<NestedConfig3090>;
  path?: ConfigPaths3090;
}

const HeavyComponent3090 = memo(function HeavyComponent3090({ config }: HeavyProps3090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3090.displayName = 'HeavyComponent3090';
export default HeavyComponent3090;
