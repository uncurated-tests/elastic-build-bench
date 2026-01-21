'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2515<T> = T extends (infer U)[]
  ? DeepReadonlyArray2515<U>
  : T extends object
  ? DeepReadonlyObject2515<T>
  : T;

interface DeepReadonlyArray2515<T> extends ReadonlyArray<DeepReadonly2515<T>> {}

type DeepReadonlyObject2515<T> = {
  readonly [P in keyof T]: DeepReadonly2515<T[P]>;
};

type UnionToIntersection2515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2515<T> = UnionToIntersection2515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2515<T extends unknown[], V> = [...T, V];

type TuplifyUnion2515<T, L = LastOf2515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2515<TuplifyUnion2515<Exclude<T, L>>, L>;

type DeepPartial2515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2515<T[P]> }
  : T;

type Paths2515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2515<K, Paths2515<T[K], Prev2515[D]>> : never }[keyof T]
  : never;

type Prev2515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2515 {
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

type ConfigPaths2515 = Paths2515<NestedConfig2515>;

interface HeavyProps2515 {
  config: DeepPartial2515<NestedConfig2515>;
  path?: ConfigPaths2515;
}

const HeavyComponent2515 = memo(function HeavyComponent2515({ config }: HeavyProps2515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2515.displayName = 'HeavyComponent2515';
export default HeavyComponent2515;
