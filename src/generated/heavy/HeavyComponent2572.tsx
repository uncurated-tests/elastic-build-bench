'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2572<T> = T extends (infer U)[]
  ? DeepReadonlyArray2572<U>
  : T extends object
  ? DeepReadonlyObject2572<T>
  : T;

interface DeepReadonlyArray2572<T> extends ReadonlyArray<DeepReadonly2572<T>> {}

type DeepReadonlyObject2572<T> = {
  readonly [P in keyof T]: DeepReadonly2572<T[P]>;
};

type UnionToIntersection2572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2572<T> = UnionToIntersection2572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2572<T extends unknown[], V> = [...T, V];

type TuplifyUnion2572<T, L = LastOf2572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2572<TuplifyUnion2572<Exclude<T, L>>, L>;

type DeepPartial2572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2572<T[P]> }
  : T;

type Paths2572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2572<K, Paths2572<T[K], Prev2572[D]>> : never }[keyof T]
  : never;

type Prev2572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2572 {
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

type ConfigPaths2572 = Paths2572<NestedConfig2572>;

interface HeavyProps2572 {
  config: DeepPartial2572<NestedConfig2572>;
  path?: ConfigPaths2572;
}

const HeavyComponent2572 = memo(function HeavyComponent2572({ config }: HeavyProps2572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2572.displayName = 'HeavyComponent2572';
export default HeavyComponent2572;
