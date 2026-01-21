'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6415<T> = T extends (infer U)[]
  ? DeepReadonlyArray6415<U>
  : T extends object
  ? DeepReadonlyObject6415<T>
  : T;

interface DeepReadonlyArray6415<T> extends ReadonlyArray<DeepReadonly6415<T>> {}

type DeepReadonlyObject6415<T> = {
  readonly [P in keyof T]: DeepReadonly6415<T[P]>;
};

type UnionToIntersection6415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6415<T> = UnionToIntersection6415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6415<T extends unknown[], V> = [...T, V];

type TuplifyUnion6415<T, L = LastOf6415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6415<TuplifyUnion6415<Exclude<T, L>>, L>;

type DeepPartial6415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6415<T[P]> }
  : T;

type Paths6415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6415<K, Paths6415<T[K], Prev6415[D]>> : never }[keyof T]
  : never;

type Prev6415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6415 {
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

type ConfigPaths6415 = Paths6415<NestedConfig6415>;

interface HeavyProps6415 {
  config: DeepPartial6415<NestedConfig6415>;
  path?: ConfigPaths6415;
}

const HeavyComponent6415 = memo(function HeavyComponent6415({ config }: HeavyProps6415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6415.displayName = 'HeavyComponent6415';
export default HeavyComponent6415;
