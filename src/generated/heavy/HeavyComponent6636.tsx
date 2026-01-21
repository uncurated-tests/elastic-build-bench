'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6636<T> = T extends (infer U)[]
  ? DeepReadonlyArray6636<U>
  : T extends object
  ? DeepReadonlyObject6636<T>
  : T;

interface DeepReadonlyArray6636<T> extends ReadonlyArray<DeepReadonly6636<T>> {}

type DeepReadonlyObject6636<T> = {
  readonly [P in keyof T]: DeepReadonly6636<T[P]>;
};

type UnionToIntersection6636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6636<T> = UnionToIntersection6636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6636<T extends unknown[], V> = [...T, V];

type TuplifyUnion6636<T, L = LastOf6636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6636<TuplifyUnion6636<Exclude<T, L>>, L>;

type DeepPartial6636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6636<T[P]> }
  : T;

type Paths6636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6636<K, Paths6636<T[K], Prev6636[D]>> : never }[keyof T]
  : never;

type Prev6636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6636 {
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

type ConfigPaths6636 = Paths6636<NestedConfig6636>;

interface HeavyProps6636 {
  config: DeepPartial6636<NestedConfig6636>;
  path?: ConfigPaths6636;
}

const HeavyComponent6636 = memo(function HeavyComponent6636({ config }: HeavyProps6636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6636.displayName = 'HeavyComponent6636';
export default HeavyComponent6636;
