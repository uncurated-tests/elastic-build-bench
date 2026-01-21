'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6972<T> = T extends (infer U)[]
  ? DeepReadonlyArray6972<U>
  : T extends object
  ? DeepReadonlyObject6972<T>
  : T;

interface DeepReadonlyArray6972<T> extends ReadonlyArray<DeepReadonly6972<T>> {}

type DeepReadonlyObject6972<T> = {
  readonly [P in keyof T]: DeepReadonly6972<T[P]>;
};

type UnionToIntersection6972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6972<T> = UnionToIntersection6972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6972<T extends unknown[], V> = [...T, V];

type TuplifyUnion6972<T, L = LastOf6972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6972<TuplifyUnion6972<Exclude<T, L>>, L>;

type DeepPartial6972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6972<T[P]> }
  : T;

type Paths6972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6972<K, Paths6972<T[K], Prev6972[D]>> : never }[keyof T]
  : never;

type Prev6972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6972 {
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

type ConfigPaths6972 = Paths6972<NestedConfig6972>;

interface HeavyProps6972 {
  config: DeepPartial6972<NestedConfig6972>;
  path?: ConfigPaths6972;
}

const HeavyComponent6972 = memo(function HeavyComponent6972({ config }: HeavyProps6972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6972.displayName = 'HeavyComponent6972';
export default HeavyComponent6972;
