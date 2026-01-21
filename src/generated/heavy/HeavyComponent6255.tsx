'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6255<T> = T extends (infer U)[]
  ? DeepReadonlyArray6255<U>
  : T extends object
  ? DeepReadonlyObject6255<T>
  : T;

interface DeepReadonlyArray6255<T> extends ReadonlyArray<DeepReadonly6255<T>> {}

type DeepReadonlyObject6255<T> = {
  readonly [P in keyof T]: DeepReadonly6255<T[P]>;
};

type UnionToIntersection6255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6255<T> = UnionToIntersection6255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6255<T extends unknown[], V> = [...T, V];

type TuplifyUnion6255<T, L = LastOf6255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6255<TuplifyUnion6255<Exclude<T, L>>, L>;

type DeepPartial6255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6255<T[P]> }
  : T;

type Paths6255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6255<K, Paths6255<T[K], Prev6255[D]>> : never }[keyof T]
  : never;

type Prev6255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6255 {
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

type ConfigPaths6255 = Paths6255<NestedConfig6255>;

interface HeavyProps6255 {
  config: DeepPartial6255<NestedConfig6255>;
  path?: ConfigPaths6255;
}

const HeavyComponent6255 = memo(function HeavyComponent6255({ config }: HeavyProps6255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6255.displayName = 'HeavyComponent6255';
export default HeavyComponent6255;
