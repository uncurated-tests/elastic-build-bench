'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3427<T> = T extends (infer U)[]
  ? DeepReadonlyArray3427<U>
  : T extends object
  ? DeepReadonlyObject3427<T>
  : T;

interface DeepReadonlyArray3427<T> extends ReadonlyArray<DeepReadonly3427<T>> {}

type DeepReadonlyObject3427<T> = {
  readonly [P in keyof T]: DeepReadonly3427<T[P]>;
};

type UnionToIntersection3427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3427<T> = UnionToIntersection3427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3427<T extends unknown[], V> = [...T, V];

type TuplifyUnion3427<T, L = LastOf3427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3427<TuplifyUnion3427<Exclude<T, L>>, L>;

type DeepPartial3427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3427<T[P]> }
  : T;

type Paths3427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3427<K, Paths3427<T[K], Prev3427[D]>> : never }[keyof T]
  : never;

type Prev3427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3427 {
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

type ConfigPaths3427 = Paths3427<NestedConfig3427>;

interface HeavyProps3427 {
  config: DeepPartial3427<NestedConfig3427>;
  path?: ConfigPaths3427;
}

const HeavyComponent3427 = memo(function HeavyComponent3427({ config }: HeavyProps3427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3427.displayName = 'HeavyComponent3427';
export default HeavyComponent3427;
