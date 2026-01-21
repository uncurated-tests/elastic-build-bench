'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6713<T> = T extends (infer U)[]
  ? DeepReadonlyArray6713<U>
  : T extends object
  ? DeepReadonlyObject6713<T>
  : T;

interface DeepReadonlyArray6713<T> extends ReadonlyArray<DeepReadonly6713<T>> {}

type DeepReadonlyObject6713<T> = {
  readonly [P in keyof T]: DeepReadonly6713<T[P]>;
};

type UnionToIntersection6713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6713<T> = UnionToIntersection6713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6713<T extends unknown[], V> = [...T, V];

type TuplifyUnion6713<T, L = LastOf6713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6713<TuplifyUnion6713<Exclude<T, L>>, L>;

type DeepPartial6713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6713<T[P]> }
  : T;

type Paths6713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6713<K, Paths6713<T[K], Prev6713[D]>> : never }[keyof T]
  : never;

type Prev6713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6713 {
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

type ConfigPaths6713 = Paths6713<NestedConfig6713>;

interface HeavyProps6713 {
  config: DeepPartial6713<NestedConfig6713>;
  path?: ConfigPaths6713;
}

const HeavyComponent6713 = memo(function HeavyComponent6713({ config }: HeavyProps6713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6713.displayName = 'HeavyComponent6713';
export default HeavyComponent6713;
