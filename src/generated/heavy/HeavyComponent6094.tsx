'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6094<T> = T extends (infer U)[]
  ? DeepReadonlyArray6094<U>
  : T extends object
  ? DeepReadonlyObject6094<T>
  : T;

interface DeepReadonlyArray6094<T> extends ReadonlyArray<DeepReadonly6094<T>> {}

type DeepReadonlyObject6094<T> = {
  readonly [P in keyof T]: DeepReadonly6094<T[P]>;
};

type UnionToIntersection6094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6094<T> = UnionToIntersection6094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6094<T extends unknown[], V> = [...T, V];

type TuplifyUnion6094<T, L = LastOf6094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6094<TuplifyUnion6094<Exclude<T, L>>, L>;

type DeepPartial6094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6094<T[P]> }
  : T;

type Paths6094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6094<K, Paths6094<T[K], Prev6094[D]>> : never }[keyof T]
  : never;

type Prev6094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6094 {
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

type ConfigPaths6094 = Paths6094<NestedConfig6094>;

interface HeavyProps6094 {
  config: DeepPartial6094<NestedConfig6094>;
  path?: ConfigPaths6094;
}

const HeavyComponent6094 = memo(function HeavyComponent6094({ config }: HeavyProps6094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6094.displayName = 'HeavyComponent6094';
export default HeavyComponent6094;
