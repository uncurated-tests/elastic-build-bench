'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6797<T> = T extends (infer U)[]
  ? DeepReadonlyArray6797<U>
  : T extends object
  ? DeepReadonlyObject6797<T>
  : T;

interface DeepReadonlyArray6797<T> extends ReadonlyArray<DeepReadonly6797<T>> {}

type DeepReadonlyObject6797<T> = {
  readonly [P in keyof T]: DeepReadonly6797<T[P]>;
};

type UnionToIntersection6797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6797<T> = UnionToIntersection6797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6797<T extends unknown[], V> = [...T, V];

type TuplifyUnion6797<T, L = LastOf6797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6797<TuplifyUnion6797<Exclude<T, L>>, L>;

type DeepPartial6797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6797<T[P]> }
  : T;

type Paths6797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6797<K, Paths6797<T[K], Prev6797[D]>> : never }[keyof T]
  : never;

type Prev6797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6797 {
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

type ConfigPaths6797 = Paths6797<NestedConfig6797>;

interface HeavyProps6797 {
  config: DeepPartial6797<NestedConfig6797>;
  path?: ConfigPaths6797;
}

const HeavyComponent6797 = memo(function HeavyComponent6797({ config }: HeavyProps6797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6797.displayName = 'HeavyComponent6797';
export default HeavyComponent6797;
