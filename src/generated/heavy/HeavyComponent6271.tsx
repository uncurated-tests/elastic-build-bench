'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6271<T> = T extends (infer U)[]
  ? DeepReadonlyArray6271<U>
  : T extends object
  ? DeepReadonlyObject6271<T>
  : T;

interface DeepReadonlyArray6271<T> extends ReadonlyArray<DeepReadonly6271<T>> {}

type DeepReadonlyObject6271<T> = {
  readonly [P in keyof T]: DeepReadonly6271<T[P]>;
};

type UnionToIntersection6271<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6271<T> = UnionToIntersection6271<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6271<T extends unknown[], V> = [...T, V];

type TuplifyUnion6271<T, L = LastOf6271<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6271<TuplifyUnion6271<Exclude<T, L>>, L>;

type DeepPartial6271<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6271<T[P]> }
  : T;

type Paths6271<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6271<K, Paths6271<T[K], Prev6271[D]>> : never }[keyof T]
  : never;

type Prev6271 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6271<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6271 {
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

type ConfigPaths6271 = Paths6271<NestedConfig6271>;

interface HeavyProps6271 {
  config: DeepPartial6271<NestedConfig6271>;
  path?: ConfigPaths6271;
}

const HeavyComponent6271 = memo(function HeavyComponent6271({ config }: HeavyProps6271) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6271) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6271 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6271: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6271.displayName = 'HeavyComponent6271';
export default HeavyComponent6271;
