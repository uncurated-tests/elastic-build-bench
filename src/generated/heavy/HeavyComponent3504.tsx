'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3504<T> = T extends (infer U)[]
  ? DeepReadonlyArray3504<U>
  : T extends object
  ? DeepReadonlyObject3504<T>
  : T;

interface DeepReadonlyArray3504<T> extends ReadonlyArray<DeepReadonly3504<T>> {}

type DeepReadonlyObject3504<T> = {
  readonly [P in keyof T]: DeepReadonly3504<T[P]>;
};

type UnionToIntersection3504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3504<T> = UnionToIntersection3504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3504<T extends unknown[], V> = [...T, V];

type TuplifyUnion3504<T, L = LastOf3504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3504<TuplifyUnion3504<Exclude<T, L>>, L>;

type DeepPartial3504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3504<T[P]> }
  : T;

type Paths3504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3504<K, Paths3504<T[K], Prev3504[D]>> : never }[keyof T]
  : never;

type Prev3504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3504 {
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

type ConfigPaths3504 = Paths3504<NestedConfig3504>;

interface HeavyProps3504 {
  config: DeepPartial3504<NestedConfig3504>;
  path?: ConfigPaths3504;
}

const HeavyComponent3504 = memo(function HeavyComponent3504({ config }: HeavyProps3504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3504.displayName = 'HeavyComponent3504';
export default HeavyComponent3504;
