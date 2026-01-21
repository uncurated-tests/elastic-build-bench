'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly474<T> = T extends (infer U)[]
  ? DeepReadonlyArray474<U>
  : T extends object
  ? DeepReadonlyObject474<T>
  : T;

interface DeepReadonlyArray474<T> extends ReadonlyArray<DeepReadonly474<T>> {}

type DeepReadonlyObject474<T> = {
  readonly [P in keyof T]: DeepReadonly474<T[P]>;
};

type UnionToIntersection474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf474<T> = UnionToIntersection474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push474<T extends unknown[], V> = [...T, V];

type TuplifyUnion474<T, L = LastOf474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push474<TuplifyUnion474<Exclude<T, L>>, L>;

type DeepPartial474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial474<T[P]> }
  : T;

type Paths474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join474<K, Paths474<T[K], Prev474[D]>> : never }[keyof T]
  : never;

type Prev474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig474 {
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

type ConfigPaths474 = Paths474<NestedConfig474>;

interface HeavyProps474 {
  config: DeepPartial474<NestedConfig474>;
  path?: ConfigPaths474;
}

const HeavyComponent474 = memo(function HeavyComponent474({ config }: HeavyProps474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent474.displayName = 'HeavyComponent474';
export default HeavyComponent474;
