'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6237<T> = T extends (infer U)[]
  ? DeepReadonlyArray6237<U>
  : T extends object
  ? DeepReadonlyObject6237<T>
  : T;

interface DeepReadonlyArray6237<T> extends ReadonlyArray<DeepReadonly6237<T>> {}

type DeepReadonlyObject6237<T> = {
  readonly [P in keyof T]: DeepReadonly6237<T[P]>;
};

type UnionToIntersection6237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6237<T> = UnionToIntersection6237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6237<T extends unknown[], V> = [...T, V];

type TuplifyUnion6237<T, L = LastOf6237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6237<TuplifyUnion6237<Exclude<T, L>>, L>;

type DeepPartial6237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6237<T[P]> }
  : T;

type Paths6237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6237<K, Paths6237<T[K], Prev6237[D]>> : never }[keyof T]
  : never;

type Prev6237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6237 {
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

type ConfigPaths6237 = Paths6237<NestedConfig6237>;

interface HeavyProps6237 {
  config: DeepPartial6237<NestedConfig6237>;
  path?: ConfigPaths6237;
}

const HeavyComponent6237 = memo(function HeavyComponent6237({ config }: HeavyProps6237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6237.displayName = 'HeavyComponent6237';
export default HeavyComponent6237;
