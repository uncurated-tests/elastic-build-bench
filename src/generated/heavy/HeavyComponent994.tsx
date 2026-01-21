'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly994<T> = T extends (infer U)[]
  ? DeepReadonlyArray994<U>
  : T extends object
  ? DeepReadonlyObject994<T>
  : T;

interface DeepReadonlyArray994<T> extends ReadonlyArray<DeepReadonly994<T>> {}

type DeepReadonlyObject994<T> = {
  readonly [P in keyof T]: DeepReadonly994<T[P]>;
};

type UnionToIntersection994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf994<T> = UnionToIntersection994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push994<T extends unknown[], V> = [...T, V];

type TuplifyUnion994<T, L = LastOf994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push994<TuplifyUnion994<Exclude<T, L>>, L>;

type DeepPartial994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial994<T[P]> }
  : T;

type Paths994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join994<K, Paths994<T[K], Prev994[D]>> : never }[keyof T]
  : never;

type Prev994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig994 {
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

type ConfigPaths994 = Paths994<NestedConfig994>;

interface HeavyProps994 {
  config: DeepPartial994<NestedConfig994>;
  path?: ConfigPaths994;
}

const HeavyComponent994 = memo(function HeavyComponent994({ config }: HeavyProps994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent994.displayName = 'HeavyComponent994';
export default HeavyComponent994;
