'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly127<T> = T extends (infer U)[]
  ? DeepReadonlyArray127<U>
  : T extends object
  ? DeepReadonlyObject127<T>
  : T;

interface DeepReadonlyArray127<T> extends ReadonlyArray<DeepReadonly127<T>> {}

type DeepReadonlyObject127<T> = {
  readonly [P in keyof T]: DeepReadonly127<T[P]>;
};

type UnionToIntersection127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf127<T> = UnionToIntersection127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push127<T extends unknown[], V> = [...T, V];

type TuplifyUnion127<T, L = LastOf127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push127<TuplifyUnion127<Exclude<T, L>>, L>;

type DeepPartial127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial127<T[P]> }
  : T;

type Paths127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join127<K, Paths127<T[K], Prev127[D]>> : never }[keyof T]
  : never;

type Prev127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig127 {
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

type ConfigPaths127 = Paths127<NestedConfig127>;

interface HeavyProps127 {
  config: DeepPartial127<NestedConfig127>;
  path?: ConfigPaths127;
}

const HeavyComponent127 = memo(function HeavyComponent127({ config }: HeavyProps127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent127.displayName = 'HeavyComponent127';
export default HeavyComponent127;
