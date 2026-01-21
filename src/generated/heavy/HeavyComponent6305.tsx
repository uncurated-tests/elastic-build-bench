'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6305<T> = T extends (infer U)[]
  ? DeepReadonlyArray6305<U>
  : T extends object
  ? DeepReadonlyObject6305<T>
  : T;

interface DeepReadonlyArray6305<T> extends ReadonlyArray<DeepReadonly6305<T>> {}

type DeepReadonlyObject6305<T> = {
  readonly [P in keyof T]: DeepReadonly6305<T[P]>;
};

type UnionToIntersection6305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6305<T> = UnionToIntersection6305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6305<T extends unknown[], V> = [...T, V];

type TuplifyUnion6305<T, L = LastOf6305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6305<TuplifyUnion6305<Exclude<T, L>>, L>;

type DeepPartial6305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6305<T[P]> }
  : T;

type Paths6305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6305<K, Paths6305<T[K], Prev6305[D]>> : never }[keyof T]
  : never;

type Prev6305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6305 {
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

type ConfigPaths6305 = Paths6305<NestedConfig6305>;

interface HeavyProps6305 {
  config: DeepPartial6305<NestedConfig6305>;
  path?: ConfigPaths6305;
}

const HeavyComponent6305 = memo(function HeavyComponent6305({ config }: HeavyProps6305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6305.displayName = 'HeavyComponent6305';
export default HeavyComponent6305;
