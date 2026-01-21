'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6275<T> = T extends (infer U)[]
  ? DeepReadonlyArray6275<U>
  : T extends object
  ? DeepReadonlyObject6275<T>
  : T;

interface DeepReadonlyArray6275<T> extends ReadonlyArray<DeepReadonly6275<T>> {}

type DeepReadonlyObject6275<T> = {
  readonly [P in keyof T]: DeepReadonly6275<T[P]>;
};

type UnionToIntersection6275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6275<T> = UnionToIntersection6275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6275<T extends unknown[], V> = [...T, V];

type TuplifyUnion6275<T, L = LastOf6275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6275<TuplifyUnion6275<Exclude<T, L>>, L>;

type DeepPartial6275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6275<T[P]> }
  : T;

type Paths6275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6275<K, Paths6275<T[K], Prev6275[D]>> : never }[keyof T]
  : never;

type Prev6275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6275 {
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

type ConfigPaths6275 = Paths6275<NestedConfig6275>;

interface HeavyProps6275 {
  config: DeepPartial6275<NestedConfig6275>;
  path?: ConfigPaths6275;
}

const HeavyComponent6275 = memo(function HeavyComponent6275({ config }: HeavyProps6275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6275.displayName = 'HeavyComponent6275';
export default HeavyComponent6275;
