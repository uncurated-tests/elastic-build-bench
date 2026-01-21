'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6714<T> = T extends (infer U)[]
  ? DeepReadonlyArray6714<U>
  : T extends object
  ? DeepReadonlyObject6714<T>
  : T;

interface DeepReadonlyArray6714<T> extends ReadonlyArray<DeepReadonly6714<T>> {}

type DeepReadonlyObject6714<T> = {
  readonly [P in keyof T]: DeepReadonly6714<T[P]>;
};

type UnionToIntersection6714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6714<T> = UnionToIntersection6714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6714<T extends unknown[], V> = [...T, V];

type TuplifyUnion6714<T, L = LastOf6714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6714<TuplifyUnion6714<Exclude<T, L>>, L>;

type DeepPartial6714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6714<T[P]> }
  : T;

type Paths6714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6714<K, Paths6714<T[K], Prev6714[D]>> : never }[keyof T]
  : never;

type Prev6714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6714 {
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

type ConfigPaths6714 = Paths6714<NestedConfig6714>;

interface HeavyProps6714 {
  config: DeepPartial6714<NestedConfig6714>;
  path?: ConfigPaths6714;
}

const HeavyComponent6714 = memo(function HeavyComponent6714({ config }: HeavyProps6714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6714.displayName = 'HeavyComponent6714';
export default HeavyComponent6714;
