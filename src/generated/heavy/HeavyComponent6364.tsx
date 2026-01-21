'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6364<T> = T extends (infer U)[]
  ? DeepReadonlyArray6364<U>
  : T extends object
  ? DeepReadonlyObject6364<T>
  : T;

interface DeepReadonlyArray6364<T> extends ReadonlyArray<DeepReadonly6364<T>> {}

type DeepReadonlyObject6364<T> = {
  readonly [P in keyof T]: DeepReadonly6364<T[P]>;
};

type UnionToIntersection6364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6364<T> = UnionToIntersection6364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6364<T extends unknown[], V> = [...T, V];

type TuplifyUnion6364<T, L = LastOf6364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6364<TuplifyUnion6364<Exclude<T, L>>, L>;

type DeepPartial6364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6364<T[P]> }
  : T;

type Paths6364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6364<K, Paths6364<T[K], Prev6364[D]>> : never }[keyof T]
  : never;

type Prev6364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6364 {
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

type ConfigPaths6364 = Paths6364<NestedConfig6364>;

interface HeavyProps6364 {
  config: DeepPartial6364<NestedConfig6364>;
  path?: ConfigPaths6364;
}

const HeavyComponent6364 = memo(function HeavyComponent6364({ config }: HeavyProps6364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6364.displayName = 'HeavyComponent6364';
export default HeavyComponent6364;
