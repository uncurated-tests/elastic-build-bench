'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3724<T> = T extends (infer U)[]
  ? DeepReadonlyArray3724<U>
  : T extends object
  ? DeepReadonlyObject3724<T>
  : T;

interface DeepReadonlyArray3724<T> extends ReadonlyArray<DeepReadonly3724<T>> {}

type DeepReadonlyObject3724<T> = {
  readonly [P in keyof T]: DeepReadonly3724<T[P]>;
};

type UnionToIntersection3724<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3724<T> = UnionToIntersection3724<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3724<T extends unknown[], V> = [...T, V];

type TuplifyUnion3724<T, L = LastOf3724<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3724<TuplifyUnion3724<Exclude<T, L>>, L>;

type DeepPartial3724<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3724<T[P]> }
  : T;

type Paths3724<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3724<K, Paths3724<T[K], Prev3724[D]>> : never }[keyof T]
  : never;

type Prev3724 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3724<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3724 {
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

type ConfigPaths3724 = Paths3724<NestedConfig3724>;

interface HeavyProps3724 {
  config: DeepPartial3724<NestedConfig3724>;
  path?: ConfigPaths3724;
}

const HeavyComponent3724 = memo(function HeavyComponent3724({ config }: HeavyProps3724) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3724) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3724 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3724: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3724.displayName = 'HeavyComponent3724';
export default HeavyComponent3724;
