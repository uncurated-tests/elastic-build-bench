'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6651<T> = T extends (infer U)[]
  ? DeepReadonlyArray6651<U>
  : T extends object
  ? DeepReadonlyObject6651<T>
  : T;

interface DeepReadonlyArray6651<T> extends ReadonlyArray<DeepReadonly6651<T>> {}

type DeepReadonlyObject6651<T> = {
  readonly [P in keyof T]: DeepReadonly6651<T[P]>;
};

type UnionToIntersection6651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6651<T> = UnionToIntersection6651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6651<T extends unknown[], V> = [...T, V];

type TuplifyUnion6651<T, L = LastOf6651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6651<TuplifyUnion6651<Exclude<T, L>>, L>;

type DeepPartial6651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6651<T[P]> }
  : T;

type Paths6651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6651<K, Paths6651<T[K], Prev6651[D]>> : never }[keyof T]
  : never;

type Prev6651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6651 {
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

type ConfigPaths6651 = Paths6651<NestedConfig6651>;

interface HeavyProps6651 {
  config: DeepPartial6651<NestedConfig6651>;
  path?: ConfigPaths6651;
}

const HeavyComponent6651 = memo(function HeavyComponent6651({ config }: HeavyProps6651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6651.displayName = 'HeavyComponent6651';
export default HeavyComponent6651;
