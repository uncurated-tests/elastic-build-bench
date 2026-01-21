'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3667<T> = T extends (infer U)[]
  ? DeepReadonlyArray3667<U>
  : T extends object
  ? DeepReadonlyObject3667<T>
  : T;

interface DeepReadonlyArray3667<T> extends ReadonlyArray<DeepReadonly3667<T>> {}

type DeepReadonlyObject3667<T> = {
  readonly [P in keyof T]: DeepReadonly3667<T[P]>;
};

type UnionToIntersection3667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3667<T> = UnionToIntersection3667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3667<T extends unknown[], V> = [...T, V];

type TuplifyUnion3667<T, L = LastOf3667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3667<TuplifyUnion3667<Exclude<T, L>>, L>;

type DeepPartial3667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3667<T[P]> }
  : T;

type Paths3667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3667<K, Paths3667<T[K], Prev3667[D]>> : never }[keyof T]
  : never;

type Prev3667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3667 {
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

type ConfigPaths3667 = Paths3667<NestedConfig3667>;

interface HeavyProps3667 {
  config: DeepPartial3667<NestedConfig3667>;
  path?: ConfigPaths3667;
}

const HeavyComponent3667 = memo(function HeavyComponent3667({ config }: HeavyProps3667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3667.displayName = 'HeavyComponent3667';
export default HeavyComponent3667;
