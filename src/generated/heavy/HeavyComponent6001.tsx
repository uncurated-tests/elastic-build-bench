'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6001<T> = T extends (infer U)[]
  ? DeepReadonlyArray6001<U>
  : T extends object
  ? DeepReadonlyObject6001<T>
  : T;

interface DeepReadonlyArray6001<T> extends ReadonlyArray<DeepReadonly6001<T>> {}

type DeepReadonlyObject6001<T> = {
  readonly [P in keyof T]: DeepReadonly6001<T[P]>;
};

type UnionToIntersection6001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6001<T> = UnionToIntersection6001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6001<T extends unknown[], V> = [...T, V];

type TuplifyUnion6001<T, L = LastOf6001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6001<TuplifyUnion6001<Exclude<T, L>>, L>;

type DeepPartial6001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6001<T[P]> }
  : T;

type Paths6001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6001<K, Paths6001<T[K], Prev6001[D]>> : never }[keyof T]
  : never;

type Prev6001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6001 {
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

type ConfigPaths6001 = Paths6001<NestedConfig6001>;

interface HeavyProps6001 {
  config: DeepPartial6001<NestedConfig6001>;
  path?: ConfigPaths6001;
}

const HeavyComponent6001 = memo(function HeavyComponent6001({ config }: HeavyProps6001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6001.displayName = 'HeavyComponent6001';
export default HeavyComponent6001;
