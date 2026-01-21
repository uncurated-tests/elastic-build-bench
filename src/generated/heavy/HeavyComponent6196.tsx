'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6196<T> = T extends (infer U)[]
  ? DeepReadonlyArray6196<U>
  : T extends object
  ? DeepReadonlyObject6196<T>
  : T;

interface DeepReadonlyArray6196<T> extends ReadonlyArray<DeepReadonly6196<T>> {}

type DeepReadonlyObject6196<T> = {
  readonly [P in keyof T]: DeepReadonly6196<T[P]>;
};

type UnionToIntersection6196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6196<T> = UnionToIntersection6196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6196<T extends unknown[], V> = [...T, V];

type TuplifyUnion6196<T, L = LastOf6196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6196<TuplifyUnion6196<Exclude<T, L>>, L>;

type DeepPartial6196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6196<T[P]> }
  : T;

type Paths6196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6196<K, Paths6196<T[K], Prev6196[D]>> : never }[keyof T]
  : never;

type Prev6196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6196 {
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

type ConfigPaths6196 = Paths6196<NestedConfig6196>;

interface HeavyProps6196 {
  config: DeepPartial6196<NestedConfig6196>;
  path?: ConfigPaths6196;
}

const HeavyComponent6196 = memo(function HeavyComponent6196({ config }: HeavyProps6196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6196.displayName = 'HeavyComponent6196';
export default HeavyComponent6196;
