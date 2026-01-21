'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly36<T> = T extends (infer U)[]
  ? DeepReadonlyArray36<U>
  : T extends object
  ? DeepReadonlyObject36<T>
  : T;

interface DeepReadonlyArray36<T> extends ReadonlyArray<DeepReadonly36<T>> {}

type DeepReadonlyObject36<T> = {
  readonly [P in keyof T]: DeepReadonly36<T[P]>;
};

type UnionToIntersection36<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf36<T> = UnionToIntersection36<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push36<T extends unknown[], V> = [...T, V];

type TuplifyUnion36<T, L = LastOf36<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push36<TuplifyUnion36<Exclude<T, L>>, L>;

type DeepPartial36<T> = T extends object
  ? { [P in keyof T]?: DeepPartial36<T[P]> }
  : T;

type Paths36<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join36<K, Paths36<T[K], Prev36[D]>> : never }[keyof T]
  : never;

type Prev36 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join36<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig36 {
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

type ConfigPaths36 = Paths36<NestedConfig36>;

interface HeavyProps36 {
  config: DeepPartial36<NestedConfig36>;
  path?: ConfigPaths36;
}

const HeavyComponent36 = memo(function HeavyComponent36({ config }: HeavyProps36) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 36) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-36 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H36: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent36.displayName = 'HeavyComponent36';
export default HeavyComponent36;
