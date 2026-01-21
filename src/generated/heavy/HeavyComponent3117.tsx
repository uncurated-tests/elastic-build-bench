'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3117<T> = T extends (infer U)[]
  ? DeepReadonlyArray3117<U>
  : T extends object
  ? DeepReadonlyObject3117<T>
  : T;

interface DeepReadonlyArray3117<T> extends ReadonlyArray<DeepReadonly3117<T>> {}

type DeepReadonlyObject3117<T> = {
  readonly [P in keyof T]: DeepReadonly3117<T[P]>;
};

type UnionToIntersection3117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3117<T> = UnionToIntersection3117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3117<T extends unknown[], V> = [...T, V];

type TuplifyUnion3117<T, L = LastOf3117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3117<TuplifyUnion3117<Exclude<T, L>>, L>;

type DeepPartial3117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3117<T[P]> }
  : T;

type Paths3117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3117<K, Paths3117<T[K], Prev3117[D]>> : never }[keyof T]
  : never;

type Prev3117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3117 {
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

type ConfigPaths3117 = Paths3117<NestedConfig3117>;

interface HeavyProps3117 {
  config: DeepPartial3117<NestedConfig3117>;
  path?: ConfigPaths3117;
}

const HeavyComponent3117 = memo(function HeavyComponent3117({ config }: HeavyProps3117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3117.displayName = 'HeavyComponent3117';
export default HeavyComponent3117;
