'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6874<T> = T extends (infer U)[]
  ? DeepReadonlyArray6874<U>
  : T extends object
  ? DeepReadonlyObject6874<T>
  : T;

interface DeepReadonlyArray6874<T> extends ReadonlyArray<DeepReadonly6874<T>> {}

type DeepReadonlyObject6874<T> = {
  readonly [P in keyof T]: DeepReadonly6874<T[P]>;
};

type UnionToIntersection6874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6874<T> = UnionToIntersection6874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6874<T extends unknown[], V> = [...T, V];

type TuplifyUnion6874<T, L = LastOf6874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6874<TuplifyUnion6874<Exclude<T, L>>, L>;

type DeepPartial6874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6874<T[P]> }
  : T;

type Paths6874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6874<K, Paths6874<T[K], Prev6874[D]>> : never }[keyof T]
  : never;

type Prev6874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6874 {
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

type ConfigPaths6874 = Paths6874<NestedConfig6874>;

interface HeavyProps6874 {
  config: DeepPartial6874<NestedConfig6874>;
  path?: ConfigPaths6874;
}

const HeavyComponent6874 = memo(function HeavyComponent6874({ config }: HeavyProps6874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6874.displayName = 'HeavyComponent6874';
export default HeavyComponent6874;
