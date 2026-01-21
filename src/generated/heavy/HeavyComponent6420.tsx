'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6420<T> = T extends (infer U)[]
  ? DeepReadonlyArray6420<U>
  : T extends object
  ? DeepReadonlyObject6420<T>
  : T;

interface DeepReadonlyArray6420<T> extends ReadonlyArray<DeepReadonly6420<T>> {}

type DeepReadonlyObject6420<T> = {
  readonly [P in keyof T]: DeepReadonly6420<T[P]>;
};

type UnionToIntersection6420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6420<T> = UnionToIntersection6420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6420<T extends unknown[], V> = [...T, V];

type TuplifyUnion6420<T, L = LastOf6420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6420<TuplifyUnion6420<Exclude<T, L>>, L>;

type DeepPartial6420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6420<T[P]> }
  : T;

type Paths6420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6420<K, Paths6420<T[K], Prev6420[D]>> : never }[keyof T]
  : never;

type Prev6420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6420 {
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

type ConfigPaths6420 = Paths6420<NestedConfig6420>;

interface HeavyProps6420 {
  config: DeepPartial6420<NestedConfig6420>;
  path?: ConfigPaths6420;
}

const HeavyComponent6420 = memo(function HeavyComponent6420({ config }: HeavyProps6420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6420.displayName = 'HeavyComponent6420';
export default HeavyComponent6420;
