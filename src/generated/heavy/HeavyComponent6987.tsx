'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6987<T> = T extends (infer U)[]
  ? DeepReadonlyArray6987<U>
  : T extends object
  ? DeepReadonlyObject6987<T>
  : T;

interface DeepReadonlyArray6987<T> extends ReadonlyArray<DeepReadonly6987<T>> {}

type DeepReadonlyObject6987<T> = {
  readonly [P in keyof T]: DeepReadonly6987<T[P]>;
};

type UnionToIntersection6987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6987<T> = UnionToIntersection6987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6987<T extends unknown[], V> = [...T, V];

type TuplifyUnion6987<T, L = LastOf6987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6987<TuplifyUnion6987<Exclude<T, L>>, L>;

type DeepPartial6987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6987<T[P]> }
  : T;

type Paths6987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6987<K, Paths6987<T[K], Prev6987[D]>> : never }[keyof T]
  : never;

type Prev6987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6987 {
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

type ConfigPaths6987 = Paths6987<NestedConfig6987>;

interface HeavyProps6987 {
  config: DeepPartial6987<NestedConfig6987>;
  path?: ConfigPaths6987;
}

const HeavyComponent6987 = memo(function HeavyComponent6987({ config }: HeavyProps6987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6987.displayName = 'HeavyComponent6987';
export default HeavyComponent6987;
