'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly920<T> = T extends (infer U)[]
  ? DeepReadonlyArray920<U>
  : T extends object
  ? DeepReadonlyObject920<T>
  : T;

interface DeepReadonlyArray920<T> extends ReadonlyArray<DeepReadonly920<T>> {}

type DeepReadonlyObject920<T> = {
  readonly [P in keyof T]: DeepReadonly920<T[P]>;
};

type UnionToIntersection920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf920<T> = UnionToIntersection920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push920<T extends unknown[], V> = [...T, V];

type TuplifyUnion920<T, L = LastOf920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push920<TuplifyUnion920<Exclude<T, L>>, L>;

type DeepPartial920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial920<T[P]> }
  : T;

type Paths920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join920<K, Paths920<T[K], Prev920[D]>> : never }[keyof T]
  : never;

type Prev920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig920 {
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

type ConfigPaths920 = Paths920<NestedConfig920>;

interface HeavyProps920 {
  config: DeepPartial920<NestedConfig920>;
  path?: ConfigPaths920;
}

const HeavyComponent920 = memo(function HeavyComponent920({ config }: HeavyProps920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent920.displayName = 'HeavyComponent920';
export default HeavyComponent920;
