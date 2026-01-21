'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6102<T> = T extends (infer U)[]
  ? DeepReadonlyArray6102<U>
  : T extends object
  ? DeepReadonlyObject6102<T>
  : T;

interface DeepReadonlyArray6102<T> extends ReadonlyArray<DeepReadonly6102<T>> {}

type DeepReadonlyObject6102<T> = {
  readonly [P in keyof T]: DeepReadonly6102<T[P]>;
};

type UnionToIntersection6102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6102<T> = UnionToIntersection6102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6102<T extends unknown[], V> = [...T, V];

type TuplifyUnion6102<T, L = LastOf6102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6102<TuplifyUnion6102<Exclude<T, L>>, L>;

type DeepPartial6102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6102<T[P]> }
  : T;

type Paths6102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6102<K, Paths6102<T[K], Prev6102[D]>> : never }[keyof T]
  : never;

type Prev6102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6102 {
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

type ConfigPaths6102 = Paths6102<NestedConfig6102>;

interface HeavyProps6102 {
  config: DeepPartial6102<NestedConfig6102>;
  path?: ConfigPaths6102;
}

const HeavyComponent6102 = memo(function HeavyComponent6102({ config }: HeavyProps6102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6102.displayName = 'HeavyComponent6102';
export default HeavyComponent6102;
