'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3364<T> = T extends (infer U)[]
  ? DeepReadonlyArray3364<U>
  : T extends object
  ? DeepReadonlyObject3364<T>
  : T;

interface DeepReadonlyArray3364<T> extends ReadonlyArray<DeepReadonly3364<T>> {}

type DeepReadonlyObject3364<T> = {
  readonly [P in keyof T]: DeepReadonly3364<T[P]>;
};

type UnionToIntersection3364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3364<T> = UnionToIntersection3364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3364<T extends unknown[], V> = [...T, V];

type TuplifyUnion3364<T, L = LastOf3364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3364<TuplifyUnion3364<Exclude<T, L>>, L>;

type DeepPartial3364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3364<T[P]> }
  : T;

type Paths3364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3364<K, Paths3364<T[K], Prev3364[D]>> : never }[keyof T]
  : never;

type Prev3364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3364 {
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

type ConfigPaths3364 = Paths3364<NestedConfig3364>;

interface HeavyProps3364 {
  config: DeepPartial3364<NestedConfig3364>;
  path?: ConfigPaths3364;
}

const HeavyComponent3364 = memo(function HeavyComponent3364({ config }: HeavyProps3364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3364.displayName = 'HeavyComponent3364';
export default HeavyComponent3364;
