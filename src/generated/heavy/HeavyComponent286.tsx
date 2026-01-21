'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly286<T> = T extends (infer U)[]
  ? DeepReadonlyArray286<U>
  : T extends object
  ? DeepReadonlyObject286<T>
  : T;

interface DeepReadonlyArray286<T> extends ReadonlyArray<DeepReadonly286<T>> {}

type DeepReadonlyObject286<T> = {
  readonly [P in keyof T]: DeepReadonly286<T[P]>;
};

type UnionToIntersection286<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf286<T> = UnionToIntersection286<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push286<T extends unknown[], V> = [...T, V];

type TuplifyUnion286<T, L = LastOf286<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push286<TuplifyUnion286<Exclude<T, L>>, L>;

type DeepPartial286<T> = T extends object
  ? { [P in keyof T]?: DeepPartial286<T[P]> }
  : T;

type Paths286<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join286<K, Paths286<T[K], Prev286[D]>> : never }[keyof T]
  : never;

type Prev286 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join286<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig286 {
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

type ConfigPaths286 = Paths286<NestedConfig286>;

interface HeavyProps286 {
  config: DeepPartial286<NestedConfig286>;
  path?: ConfigPaths286;
}

const HeavyComponent286 = memo(function HeavyComponent286({ config }: HeavyProps286) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 286) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-286 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H286: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent286.displayName = 'HeavyComponent286';
export default HeavyComponent286;
