'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6998<T> = T extends (infer U)[]
  ? DeepReadonlyArray6998<U>
  : T extends object
  ? DeepReadonlyObject6998<T>
  : T;

interface DeepReadonlyArray6998<T> extends ReadonlyArray<DeepReadonly6998<T>> {}

type DeepReadonlyObject6998<T> = {
  readonly [P in keyof T]: DeepReadonly6998<T[P]>;
};

type UnionToIntersection6998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6998<T> = UnionToIntersection6998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6998<T extends unknown[], V> = [...T, V];

type TuplifyUnion6998<T, L = LastOf6998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6998<TuplifyUnion6998<Exclude<T, L>>, L>;

type DeepPartial6998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6998<T[P]> }
  : T;

type Paths6998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6998<K, Paths6998<T[K], Prev6998[D]>> : never }[keyof T]
  : never;

type Prev6998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6998 {
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

type ConfigPaths6998 = Paths6998<NestedConfig6998>;

interface HeavyProps6998 {
  config: DeepPartial6998<NestedConfig6998>;
  path?: ConfigPaths6998;
}

const HeavyComponent6998 = memo(function HeavyComponent6998({ config }: HeavyProps6998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6998.displayName = 'HeavyComponent6998';
export default HeavyComponent6998;
