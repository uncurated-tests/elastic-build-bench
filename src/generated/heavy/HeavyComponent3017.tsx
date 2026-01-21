'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3017<T> = T extends (infer U)[]
  ? DeepReadonlyArray3017<U>
  : T extends object
  ? DeepReadonlyObject3017<T>
  : T;

interface DeepReadonlyArray3017<T> extends ReadonlyArray<DeepReadonly3017<T>> {}

type DeepReadonlyObject3017<T> = {
  readonly [P in keyof T]: DeepReadonly3017<T[P]>;
};

type UnionToIntersection3017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3017<T> = UnionToIntersection3017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3017<T extends unknown[], V> = [...T, V];

type TuplifyUnion3017<T, L = LastOf3017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3017<TuplifyUnion3017<Exclude<T, L>>, L>;

type DeepPartial3017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3017<T[P]> }
  : T;

type Paths3017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3017<K, Paths3017<T[K], Prev3017[D]>> : never }[keyof T]
  : never;

type Prev3017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3017 {
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

type ConfigPaths3017 = Paths3017<NestedConfig3017>;

interface HeavyProps3017 {
  config: DeepPartial3017<NestedConfig3017>;
  path?: ConfigPaths3017;
}

const HeavyComponent3017 = memo(function HeavyComponent3017({ config }: HeavyProps3017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3017.displayName = 'HeavyComponent3017';
export default HeavyComponent3017;
