'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6018<T> = T extends (infer U)[]
  ? DeepReadonlyArray6018<U>
  : T extends object
  ? DeepReadonlyObject6018<T>
  : T;

interface DeepReadonlyArray6018<T> extends ReadonlyArray<DeepReadonly6018<T>> {}

type DeepReadonlyObject6018<T> = {
  readonly [P in keyof T]: DeepReadonly6018<T[P]>;
};

type UnionToIntersection6018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6018<T> = UnionToIntersection6018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6018<T extends unknown[], V> = [...T, V];

type TuplifyUnion6018<T, L = LastOf6018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6018<TuplifyUnion6018<Exclude<T, L>>, L>;

type DeepPartial6018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6018<T[P]> }
  : T;

type Paths6018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6018<K, Paths6018<T[K], Prev6018[D]>> : never }[keyof T]
  : never;

type Prev6018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6018 {
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

type ConfigPaths6018 = Paths6018<NestedConfig6018>;

interface HeavyProps6018 {
  config: DeepPartial6018<NestedConfig6018>;
  path?: ConfigPaths6018;
}

const HeavyComponent6018 = memo(function HeavyComponent6018({ config }: HeavyProps6018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6018.displayName = 'HeavyComponent6018';
export default HeavyComponent6018;
