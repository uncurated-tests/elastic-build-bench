'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6165<T> = T extends (infer U)[]
  ? DeepReadonlyArray6165<U>
  : T extends object
  ? DeepReadonlyObject6165<T>
  : T;

interface DeepReadonlyArray6165<T> extends ReadonlyArray<DeepReadonly6165<T>> {}

type DeepReadonlyObject6165<T> = {
  readonly [P in keyof T]: DeepReadonly6165<T[P]>;
};

type UnionToIntersection6165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6165<T> = UnionToIntersection6165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6165<T extends unknown[], V> = [...T, V];

type TuplifyUnion6165<T, L = LastOf6165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6165<TuplifyUnion6165<Exclude<T, L>>, L>;

type DeepPartial6165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6165<T[P]> }
  : T;

type Paths6165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6165<K, Paths6165<T[K], Prev6165[D]>> : never }[keyof T]
  : never;

type Prev6165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6165 {
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

type ConfigPaths6165 = Paths6165<NestedConfig6165>;

interface HeavyProps6165 {
  config: DeepPartial6165<NestedConfig6165>;
  path?: ConfigPaths6165;
}

const HeavyComponent6165 = memo(function HeavyComponent6165({ config }: HeavyProps6165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6165.displayName = 'HeavyComponent6165';
export default HeavyComponent6165;
