'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6273<T> = T extends (infer U)[]
  ? DeepReadonlyArray6273<U>
  : T extends object
  ? DeepReadonlyObject6273<T>
  : T;

interface DeepReadonlyArray6273<T> extends ReadonlyArray<DeepReadonly6273<T>> {}

type DeepReadonlyObject6273<T> = {
  readonly [P in keyof T]: DeepReadonly6273<T[P]>;
};

type UnionToIntersection6273<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6273<T> = UnionToIntersection6273<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6273<T extends unknown[], V> = [...T, V];

type TuplifyUnion6273<T, L = LastOf6273<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6273<TuplifyUnion6273<Exclude<T, L>>, L>;

type DeepPartial6273<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6273<T[P]> }
  : T;

type Paths6273<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6273<K, Paths6273<T[K], Prev6273[D]>> : never }[keyof T]
  : never;

type Prev6273 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6273<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6273 {
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

type ConfigPaths6273 = Paths6273<NestedConfig6273>;

interface HeavyProps6273 {
  config: DeepPartial6273<NestedConfig6273>;
  path?: ConfigPaths6273;
}

const HeavyComponent6273 = memo(function HeavyComponent6273({ config }: HeavyProps6273) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6273) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6273 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6273: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6273.displayName = 'HeavyComponent6273';
export default HeavyComponent6273;
