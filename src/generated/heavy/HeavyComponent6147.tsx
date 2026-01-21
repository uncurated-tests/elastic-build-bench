'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6147<T> = T extends (infer U)[]
  ? DeepReadonlyArray6147<U>
  : T extends object
  ? DeepReadonlyObject6147<T>
  : T;

interface DeepReadonlyArray6147<T> extends ReadonlyArray<DeepReadonly6147<T>> {}

type DeepReadonlyObject6147<T> = {
  readonly [P in keyof T]: DeepReadonly6147<T[P]>;
};

type UnionToIntersection6147<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6147<T> = UnionToIntersection6147<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6147<T extends unknown[], V> = [...T, V];

type TuplifyUnion6147<T, L = LastOf6147<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6147<TuplifyUnion6147<Exclude<T, L>>, L>;

type DeepPartial6147<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6147<T[P]> }
  : T;

type Paths6147<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6147<K, Paths6147<T[K], Prev6147[D]>> : never }[keyof T]
  : never;

type Prev6147 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6147<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6147 {
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

type ConfigPaths6147 = Paths6147<NestedConfig6147>;

interface HeavyProps6147 {
  config: DeepPartial6147<NestedConfig6147>;
  path?: ConfigPaths6147;
}

const HeavyComponent6147 = memo(function HeavyComponent6147({ config }: HeavyProps6147) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6147) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6147 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6147: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6147.displayName = 'HeavyComponent6147';
export default HeavyComponent6147;
