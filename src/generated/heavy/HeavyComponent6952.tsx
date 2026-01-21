'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6952<T> = T extends (infer U)[]
  ? DeepReadonlyArray6952<U>
  : T extends object
  ? DeepReadonlyObject6952<T>
  : T;

interface DeepReadonlyArray6952<T> extends ReadonlyArray<DeepReadonly6952<T>> {}

type DeepReadonlyObject6952<T> = {
  readonly [P in keyof T]: DeepReadonly6952<T[P]>;
};

type UnionToIntersection6952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6952<T> = UnionToIntersection6952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6952<T extends unknown[], V> = [...T, V];

type TuplifyUnion6952<T, L = LastOf6952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6952<TuplifyUnion6952<Exclude<T, L>>, L>;

type DeepPartial6952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6952<T[P]> }
  : T;

type Paths6952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6952<K, Paths6952<T[K], Prev6952[D]>> : never }[keyof T]
  : never;

type Prev6952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6952 {
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

type ConfigPaths6952 = Paths6952<NestedConfig6952>;

interface HeavyProps6952 {
  config: DeepPartial6952<NestedConfig6952>;
  path?: ConfigPaths6952;
}

const HeavyComponent6952 = memo(function HeavyComponent6952({ config }: HeavyProps6952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6952.displayName = 'HeavyComponent6952';
export default HeavyComponent6952;
