'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3941<T> = T extends (infer U)[]
  ? DeepReadonlyArray3941<U>
  : T extends object
  ? DeepReadonlyObject3941<T>
  : T;

interface DeepReadonlyArray3941<T> extends ReadonlyArray<DeepReadonly3941<T>> {}

type DeepReadonlyObject3941<T> = {
  readonly [P in keyof T]: DeepReadonly3941<T[P]>;
};

type UnionToIntersection3941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3941<T> = UnionToIntersection3941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3941<T extends unknown[], V> = [...T, V];

type TuplifyUnion3941<T, L = LastOf3941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3941<TuplifyUnion3941<Exclude<T, L>>, L>;

type DeepPartial3941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3941<T[P]> }
  : T;

type Paths3941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3941<K, Paths3941<T[K], Prev3941[D]>> : never }[keyof T]
  : never;

type Prev3941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3941 {
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

type ConfigPaths3941 = Paths3941<NestedConfig3941>;

interface HeavyProps3941 {
  config: DeepPartial3941<NestedConfig3941>;
  path?: ConfigPaths3941;
}

const HeavyComponent3941 = memo(function HeavyComponent3941({ config }: HeavyProps3941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3941.displayName = 'HeavyComponent3941';
export default HeavyComponent3941;
