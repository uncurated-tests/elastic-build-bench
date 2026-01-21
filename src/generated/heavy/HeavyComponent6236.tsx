'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6236<T> = T extends (infer U)[]
  ? DeepReadonlyArray6236<U>
  : T extends object
  ? DeepReadonlyObject6236<T>
  : T;

interface DeepReadonlyArray6236<T> extends ReadonlyArray<DeepReadonly6236<T>> {}

type DeepReadonlyObject6236<T> = {
  readonly [P in keyof T]: DeepReadonly6236<T[P]>;
};

type UnionToIntersection6236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6236<T> = UnionToIntersection6236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6236<T extends unknown[], V> = [...T, V];

type TuplifyUnion6236<T, L = LastOf6236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6236<TuplifyUnion6236<Exclude<T, L>>, L>;

type DeepPartial6236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6236<T[P]> }
  : T;

type Paths6236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6236<K, Paths6236<T[K], Prev6236[D]>> : never }[keyof T]
  : never;

type Prev6236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6236 {
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

type ConfigPaths6236 = Paths6236<NestedConfig6236>;

interface HeavyProps6236 {
  config: DeepPartial6236<NestedConfig6236>;
  path?: ConfigPaths6236;
}

const HeavyComponent6236 = memo(function HeavyComponent6236({ config }: HeavyProps6236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6236.displayName = 'HeavyComponent6236';
export default HeavyComponent6236;
