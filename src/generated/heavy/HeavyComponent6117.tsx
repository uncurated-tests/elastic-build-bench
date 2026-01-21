'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6117<T> = T extends (infer U)[]
  ? DeepReadonlyArray6117<U>
  : T extends object
  ? DeepReadonlyObject6117<T>
  : T;

interface DeepReadonlyArray6117<T> extends ReadonlyArray<DeepReadonly6117<T>> {}

type DeepReadonlyObject6117<T> = {
  readonly [P in keyof T]: DeepReadonly6117<T[P]>;
};

type UnionToIntersection6117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6117<T> = UnionToIntersection6117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6117<T extends unknown[], V> = [...T, V];

type TuplifyUnion6117<T, L = LastOf6117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6117<TuplifyUnion6117<Exclude<T, L>>, L>;

type DeepPartial6117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6117<T[P]> }
  : T;

type Paths6117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6117<K, Paths6117<T[K], Prev6117[D]>> : never }[keyof T]
  : never;

type Prev6117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6117 {
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

type ConfigPaths6117 = Paths6117<NestedConfig6117>;

interface HeavyProps6117 {
  config: DeepPartial6117<NestedConfig6117>;
  path?: ConfigPaths6117;
}

const HeavyComponent6117 = memo(function HeavyComponent6117({ config }: HeavyProps6117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6117.displayName = 'HeavyComponent6117';
export default HeavyComponent6117;
