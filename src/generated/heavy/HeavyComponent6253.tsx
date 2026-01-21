'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6253<T> = T extends (infer U)[]
  ? DeepReadonlyArray6253<U>
  : T extends object
  ? DeepReadonlyObject6253<T>
  : T;

interface DeepReadonlyArray6253<T> extends ReadonlyArray<DeepReadonly6253<T>> {}

type DeepReadonlyObject6253<T> = {
  readonly [P in keyof T]: DeepReadonly6253<T[P]>;
};

type UnionToIntersection6253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6253<T> = UnionToIntersection6253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6253<T extends unknown[], V> = [...T, V];

type TuplifyUnion6253<T, L = LastOf6253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6253<TuplifyUnion6253<Exclude<T, L>>, L>;

type DeepPartial6253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6253<T[P]> }
  : T;

type Paths6253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6253<K, Paths6253<T[K], Prev6253[D]>> : never }[keyof T]
  : never;

type Prev6253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6253 {
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

type ConfigPaths6253 = Paths6253<NestedConfig6253>;

interface HeavyProps6253 {
  config: DeepPartial6253<NestedConfig6253>;
  path?: ConfigPaths6253;
}

const HeavyComponent6253 = memo(function HeavyComponent6253({ config }: HeavyProps6253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6253.displayName = 'HeavyComponent6253';
export default HeavyComponent6253;
