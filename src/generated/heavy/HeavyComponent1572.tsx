'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1572<T> = T extends (infer U)[]
  ? DeepReadonlyArray1572<U>
  : T extends object
  ? DeepReadonlyObject1572<T>
  : T;

interface DeepReadonlyArray1572<T> extends ReadonlyArray<DeepReadonly1572<T>> {}

type DeepReadonlyObject1572<T> = {
  readonly [P in keyof T]: DeepReadonly1572<T[P]>;
};

type UnionToIntersection1572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1572<T> = UnionToIntersection1572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1572<T extends unknown[], V> = [...T, V];

type TuplifyUnion1572<T, L = LastOf1572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1572<TuplifyUnion1572<Exclude<T, L>>, L>;

type DeepPartial1572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1572<T[P]> }
  : T;

type Paths1572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1572<K, Paths1572<T[K], Prev1572[D]>> : never }[keyof T]
  : never;

type Prev1572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1572 {
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

type ConfigPaths1572 = Paths1572<NestedConfig1572>;

interface HeavyProps1572 {
  config: DeepPartial1572<NestedConfig1572>;
  path?: ConfigPaths1572;
}

const HeavyComponent1572 = memo(function HeavyComponent1572({ config }: HeavyProps1572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1572.displayName = 'HeavyComponent1572';
export default HeavyComponent1572;
