'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3572<T> = T extends (infer U)[]
  ? DeepReadonlyArray3572<U>
  : T extends object
  ? DeepReadonlyObject3572<T>
  : T;

interface DeepReadonlyArray3572<T> extends ReadonlyArray<DeepReadonly3572<T>> {}

type DeepReadonlyObject3572<T> = {
  readonly [P in keyof T]: DeepReadonly3572<T[P]>;
};

type UnionToIntersection3572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3572<T> = UnionToIntersection3572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3572<T extends unknown[], V> = [...T, V];

type TuplifyUnion3572<T, L = LastOf3572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3572<TuplifyUnion3572<Exclude<T, L>>, L>;

type DeepPartial3572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3572<T[P]> }
  : T;

type Paths3572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3572<K, Paths3572<T[K], Prev3572[D]>> : never }[keyof T]
  : never;

type Prev3572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3572 {
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

type ConfigPaths3572 = Paths3572<NestedConfig3572>;

interface HeavyProps3572 {
  config: DeepPartial3572<NestedConfig3572>;
  path?: ConfigPaths3572;
}

const HeavyComponent3572 = memo(function HeavyComponent3572({ config }: HeavyProps3572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3572.displayName = 'HeavyComponent3572';
export default HeavyComponent3572;
