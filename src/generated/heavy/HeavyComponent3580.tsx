'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3580<T> = T extends (infer U)[]
  ? DeepReadonlyArray3580<U>
  : T extends object
  ? DeepReadonlyObject3580<T>
  : T;

interface DeepReadonlyArray3580<T> extends ReadonlyArray<DeepReadonly3580<T>> {}

type DeepReadonlyObject3580<T> = {
  readonly [P in keyof T]: DeepReadonly3580<T[P]>;
};

type UnionToIntersection3580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3580<T> = UnionToIntersection3580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3580<T extends unknown[], V> = [...T, V];

type TuplifyUnion3580<T, L = LastOf3580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3580<TuplifyUnion3580<Exclude<T, L>>, L>;

type DeepPartial3580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3580<T[P]> }
  : T;

type Paths3580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3580<K, Paths3580<T[K], Prev3580[D]>> : never }[keyof T]
  : never;

type Prev3580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3580 {
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

type ConfigPaths3580 = Paths3580<NestedConfig3580>;

interface HeavyProps3580 {
  config: DeepPartial3580<NestedConfig3580>;
  path?: ConfigPaths3580;
}

const HeavyComponent3580 = memo(function HeavyComponent3580({ config }: HeavyProps3580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3580.displayName = 'HeavyComponent3580';
export default HeavyComponent3580;
