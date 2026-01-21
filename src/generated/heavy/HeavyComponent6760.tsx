'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6760<T> = T extends (infer U)[]
  ? DeepReadonlyArray6760<U>
  : T extends object
  ? DeepReadonlyObject6760<T>
  : T;

interface DeepReadonlyArray6760<T> extends ReadonlyArray<DeepReadonly6760<T>> {}

type DeepReadonlyObject6760<T> = {
  readonly [P in keyof T]: DeepReadonly6760<T[P]>;
};

type UnionToIntersection6760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6760<T> = UnionToIntersection6760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6760<T extends unknown[], V> = [...T, V];

type TuplifyUnion6760<T, L = LastOf6760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6760<TuplifyUnion6760<Exclude<T, L>>, L>;

type DeepPartial6760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6760<T[P]> }
  : T;

type Paths6760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6760<K, Paths6760<T[K], Prev6760[D]>> : never }[keyof T]
  : never;

type Prev6760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6760 {
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

type ConfigPaths6760 = Paths6760<NestedConfig6760>;

interface HeavyProps6760 {
  config: DeepPartial6760<NestedConfig6760>;
  path?: ConfigPaths6760;
}

const HeavyComponent6760 = memo(function HeavyComponent6760({ config }: HeavyProps6760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6760.displayName = 'HeavyComponent6760';
export default HeavyComponent6760;
