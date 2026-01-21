'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13572<T> = T extends (infer U)[]
  ? DeepReadonlyArray13572<U>
  : T extends object
  ? DeepReadonlyObject13572<T>
  : T;

interface DeepReadonlyArray13572<T> extends ReadonlyArray<DeepReadonly13572<T>> {}

type DeepReadonlyObject13572<T> = {
  readonly [P in keyof T]: DeepReadonly13572<T[P]>;
};

type UnionToIntersection13572<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13572<T> = UnionToIntersection13572<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13572<T extends unknown[], V> = [...T, V];

type TuplifyUnion13572<T, L = LastOf13572<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13572<TuplifyUnion13572<Exclude<T, L>>, L>;

type DeepPartial13572<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13572<T[P]> }
  : T;

type Paths13572<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13572<K, Paths13572<T[K], Prev13572[D]>> : never }[keyof T]
  : never;

type Prev13572 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13572<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13572 {
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

type ConfigPaths13572 = Paths13572<NestedConfig13572>;

interface HeavyProps13572 {
  config: DeepPartial13572<NestedConfig13572>;
  path?: ConfigPaths13572;
}

const HeavyComponent13572 = memo(function HeavyComponent13572({ config }: HeavyProps13572) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13572) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13572 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13572: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13572.displayName = 'HeavyComponent13572';
export default HeavyComponent13572;
