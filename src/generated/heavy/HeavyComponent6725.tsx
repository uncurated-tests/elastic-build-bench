'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6725<T> = T extends (infer U)[]
  ? DeepReadonlyArray6725<U>
  : T extends object
  ? DeepReadonlyObject6725<T>
  : T;

interface DeepReadonlyArray6725<T> extends ReadonlyArray<DeepReadonly6725<T>> {}

type DeepReadonlyObject6725<T> = {
  readonly [P in keyof T]: DeepReadonly6725<T[P]>;
};

type UnionToIntersection6725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6725<T> = UnionToIntersection6725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6725<T extends unknown[], V> = [...T, V];

type TuplifyUnion6725<T, L = LastOf6725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6725<TuplifyUnion6725<Exclude<T, L>>, L>;

type DeepPartial6725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6725<T[P]> }
  : T;

type Paths6725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6725<K, Paths6725<T[K], Prev6725[D]>> : never }[keyof T]
  : never;

type Prev6725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6725 {
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

type ConfigPaths6725 = Paths6725<NestedConfig6725>;

interface HeavyProps6725 {
  config: DeepPartial6725<NestedConfig6725>;
  path?: ConfigPaths6725;
}

const HeavyComponent6725 = memo(function HeavyComponent6725({ config }: HeavyProps6725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6725.displayName = 'HeavyComponent6725';
export default HeavyComponent6725;
