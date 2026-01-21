'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6262<T> = T extends (infer U)[]
  ? DeepReadonlyArray6262<U>
  : T extends object
  ? DeepReadonlyObject6262<T>
  : T;

interface DeepReadonlyArray6262<T> extends ReadonlyArray<DeepReadonly6262<T>> {}

type DeepReadonlyObject6262<T> = {
  readonly [P in keyof T]: DeepReadonly6262<T[P]>;
};

type UnionToIntersection6262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6262<T> = UnionToIntersection6262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6262<T extends unknown[], V> = [...T, V];

type TuplifyUnion6262<T, L = LastOf6262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6262<TuplifyUnion6262<Exclude<T, L>>, L>;

type DeepPartial6262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6262<T[P]> }
  : T;

type Paths6262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6262<K, Paths6262<T[K], Prev6262[D]>> : never }[keyof T]
  : never;

type Prev6262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6262 {
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

type ConfigPaths6262 = Paths6262<NestedConfig6262>;

interface HeavyProps6262 {
  config: DeepPartial6262<NestedConfig6262>;
  path?: ConfigPaths6262;
}

const HeavyComponent6262 = memo(function HeavyComponent6262({ config }: HeavyProps6262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6262.displayName = 'HeavyComponent6262';
export default HeavyComponent6262;
