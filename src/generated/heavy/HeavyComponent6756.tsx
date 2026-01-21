'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6756<T> = T extends (infer U)[]
  ? DeepReadonlyArray6756<U>
  : T extends object
  ? DeepReadonlyObject6756<T>
  : T;

interface DeepReadonlyArray6756<T> extends ReadonlyArray<DeepReadonly6756<T>> {}

type DeepReadonlyObject6756<T> = {
  readonly [P in keyof T]: DeepReadonly6756<T[P]>;
};

type UnionToIntersection6756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6756<T> = UnionToIntersection6756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6756<T extends unknown[], V> = [...T, V];

type TuplifyUnion6756<T, L = LastOf6756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6756<TuplifyUnion6756<Exclude<T, L>>, L>;

type DeepPartial6756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6756<T[P]> }
  : T;

type Paths6756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6756<K, Paths6756<T[K], Prev6756[D]>> : never }[keyof T]
  : never;

type Prev6756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6756 {
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

type ConfigPaths6756 = Paths6756<NestedConfig6756>;

interface HeavyProps6756 {
  config: DeepPartial6756<NestedConfig6756>;
  path?: ConfigPaths6756;
}

const HeavyComponent6756 = memo(function HeavyComponent6756({ config }: HeavyProps6756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6756.displayName = 'HeavyComponent6756';
export default HeavyComponent6756;
