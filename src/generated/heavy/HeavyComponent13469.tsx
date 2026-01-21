'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13469<T> = T extends (infer U)[]
  ? DeepReadonlyArray13469<U>
  : T extends object
  ? DeepReadonlyObject13469<T>
  : T;

interface DeepReadonlyArray13469<T> extends ReadonlyArray<DeepReadonly13469<T>> {}

type DeepReadonlyObject13469<T> = {
  readonly [P in keyof T]: DeepReadonly13469<T[P]>;
};

type UnionToIntersection13469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13469<T> = UnionToIntersection13469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13469<T extends unknown[], V> = [...T, V];

type TuplifyUnion13469<T, L = LastOf13469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13469<TuplifyUnion13469<Exclude<T, L>>, L>;

type DeepPartial13469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13469<T[P]> }
  : T;

type Paths13469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13469<K, Paths13469<T[K], Prev13469[D]>> : never }[keyof T]
  : never;

type Prev13469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13469 {
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

type ConfigPaths13469 = Paths13469<NestedConfig13469>;

interface HeavyProps13469 {
  config: DeepPartial13469<NestedConfig13469>;
  path?: ConfigPaths13469;
}

const HeavyComponent13469 = memo(function HeavyComponent13469({ config }: HeavyProps13469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13469.displayName = 'HeavyComponent13469';
export default HeavyComponent13469;
