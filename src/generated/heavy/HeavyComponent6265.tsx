'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6265<T> = T extends (infer U)[]
  ? DeepReadonlyArray6265<U>
  : T extends object
  ? DeepReadonlyObject6265<T>
  : T;

interface DeepReadonlyArray6265<T> extends ReadonlyArray<DeepReadonly6265<T>> {}

type DeepReadonlyObject6265<T> = {
  readonly [P in keyof T]: DeepReadonly6265<T[P]>;
};

type UnionToIntersection6265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6265<T> = UnionToIntersection6265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6265<T extends unknown[], V> = [...T, V];

type TuplifyUnion6265<T, L = LastOf6265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6265<TuplifyUnion6265<Exclude<T, L>>, L>;

type DeepPartial6265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6265<T[P]> }
  : T;

type Paths6265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6265<K, Paths6265<T[K], Prev6265[D]>> : never }[keyof T]
  : never;

type Prev6265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6265 {
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

type ConfigPaths6265 = Paths6265<NestedConfig6265>;

interface HeavyProps6265 {
  config: DeepPartial6265<NestedConfig6265>;
  path?: ConfigPaths6265;
}

const HeavyComponent6265 = memo(function HeavyComponent6265({ config }: HeavyProps6265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6265.displayName = 'HeavyComponent6265';
export default HeavyComponent6265;
