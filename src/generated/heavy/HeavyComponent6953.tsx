'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6953<T> = T extends (infer U)[]
  ? DeepReadonlyArray6953<U>
  : T extends object
  ? DeepReadonlyObject6953<T>
  : T;

interface DeepReadonlyArray6953<T> extends ReadonlyArray<DeepReadonly6953<T>> {}

type DeepReadonlyObject6953<T> = {
  readonly [P in keyof T]: DeepReadonly6953<T[P]>;
};

type UnionToIntersection6953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6953<T> = UnionToIntersection6953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6953<T extends unknown[], V> = [...T, V];

type TuplifyUnion6953<T, L = LastOf6953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6953<TuplifyUnion6953<Exclude<T, L>>, L>;

type DeepPartial6953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6953<T[P]> }
  : T;

type Paths6953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6953<K, Paths6953<T[K], Prev6953[D]>> : never }[keyof T]
  : never;

type Prev6953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6953 {
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

type ConfigPaths6953 = Paths6953<NestedConfig6953>;

interface HeavyProps6953 {
  config: DeepPartial6953<NestedConfig6953>;
  path?: ConfigPaths6953;
}

const HeavyComponent6953 = memo(function HeavyComponent6953({ config }: HeavyProps6953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6953.displayName = 'HeavyComponent6953';
export default HeavyComponent6953;
