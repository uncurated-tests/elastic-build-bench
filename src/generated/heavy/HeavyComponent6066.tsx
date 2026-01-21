'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6066<T> = T extends (infer U)[]
  ? DeepReadonlyArray6066<U>
  : T extends object
  ? DeepReadonlyObject6066<T>
  : T;

interface DeepReadonlyArray6066<T> extends ReadonlyArray<DeepReadonly6066<T>> {}

type DeepReadonlyObject6066<T> = {
  readonly [P in keyof T]: DeepReadonly6066<T[P]>;
};

type UnionToIntersection6066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6066<T> = UnionToIntersection6066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6066<T extends unknown[], V> = [...T, V];

type TuplifyUnion6066<T, L = LastOf6066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6066<TuplifyUnion6066<Exclude<T, L>>, L>;

type DeepPartial6066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6066<T[P]> }
  : T;

type Paths6066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6066<K, Paths6066<T[K], Prev6066[D]>> : never }[keyof T]
  : never;

type Prev6066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6066 {
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

type ConfigPaths6066 = Paths6066<NestedConfig6066>;

interface HeavyProps6066 {
  config: DeepPartial6066<NestedConfig6066>;
  path?: ConfigPaths6066;
}

const HeavyComponent6066 = memo(function HeavyComponent6066({ config }: HeavyProps6066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6066.displayName = 'HeavyComponent6066';
export default HeavyComponent6066;
