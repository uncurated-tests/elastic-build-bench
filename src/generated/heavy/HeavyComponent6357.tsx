'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6357<T> = T extends (infer U)[]
  ? DeepReadonlyArray6357<U>
  : T extends object
  ? DeepReadonlyObject6357<T>
  : T;

interface DeepReadonlyArray6357<T> extends ReadonlyArray<DeepReadonly6357<T>> {}

type DeepReadonlyObject6357<T> = {
  readonly [P in keyof T]: DeepReadonly6357<T[P]>;
};

type UnionToIntersection6357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6357<T> = UnionToIntersection6357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6357<T extends unknown[], V> = [...T, V];

type TuplifyUnion6357<T, L = LastOf6357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6357<TuplifyUnion6357<Exclude<T, L>>, L>;

type DeepPartial6357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6357<T[P]> }
  : T;

type Paths6357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6357<K, Paths6357<T[K], Prev6357[D]>> : never }[keyof T]
  : never;

type Prev6357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6357 {
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

type ConfigPaths6357 = Paths6357<NestedConfig6357>;

interface HeavyProps6357 {
  config: DeepPartial6357<NestedConfig6357>;
  path?: ConfigPaths6357;
}

const HeavyComponent6357 = memo(function HeavyComponent6357({ config }: HeavyProps6357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6357.displayName = 'HeavyComponent6357';
export default HeavyComponent6357;
