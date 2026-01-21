'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6195<T> = T extends (infer U)[]
  ? DeepReadonlyArray6195<U>
  : T extends object
  ? DeepReadonlyObject6195<T>
  : T;

interface DeepReadonlyArray6195<T> extends ReadonlyArray<DeepReadonly6195<T>> {}

type DeepReadonlyObject6195<T> = {
  readonly [P in keyof T]: DeepReadonly6195<T[P]>;
};

type UnionToIntersection6195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6195<T> = UnionToIntersection6195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6195<T extends unknown[], V> = [...T, V];

type TuplifyUnion6195<T, L = LastOf6195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6195<TuplifyUnion6195<Exclude<T, L>>, L>;

type DeepPartial6195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6195<T[P]> }
  : T;

type Paths6195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6195<K, Paths6195<T[K], Prev6195[D]>> : never }[keyof T]
  : never;

type Prev6195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6195 {
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

type ConfigPaths6195 = Paths6195<NestedConfig6195>;

interface HeavyProps6195 {
  config: DeepPartial6195<NestedConfig6195>;
  path?: ConfigPaths6195;
}

const HeavyComponent6195 = memo(function HeavyComponent6195({ config }: HeavyProps6195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6195.displayName = 'HeavyComponent6195';
export default HeavyComponent6195;
