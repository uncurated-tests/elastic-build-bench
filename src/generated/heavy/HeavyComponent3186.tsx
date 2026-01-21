'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3186<T> = T extends (infer U)[]
  ? DeepReadonlyArray3186<U>
  : T extends object
  ? DeepReadonlyObject3186<T>
  : T;

interface DeepReadonlyArray3186<T> extends ReadonlyArray<DeepReadonly3186<T>> {}

type DeepReadonlyObject3186<T> = {
  readonly [P in keyof T]: DeepReadonly3186<T[P]>;
};

type UnionToIntersection3186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3186<T> = UnionToIntersection3186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3186<T extends unknown[], V> = [...T, V];

type TuplifyUnion3186<T, L = LastOf3186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3186<TuplifyUnion3186<Exclude<T, L>>, L>;

type DeepPartial3186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3186<T[P]> }
  : T;

type Paths3186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3186<K, Paths3186<T[K], Prev3186[D]>> : never }[keyof T]
  : never;

type Prev3186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3186 {
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

type ConfigPaths3186 = Paths3186<NestedConfig3186>;

interface HeavyProps3186 {
  config: DeepPartial3186<NestedConfig3186>;
  path?: ConfigPaths3186;
}

const HeavyComponent3186 = memo(function HeavyComponent3186({ config }: HeavyProps3186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3186.displayName = 'HeavyComponent3186';
export default HeavyComponent3186;
