'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6261<T> = T extends (infer U)[]
  ? DeepReadonlyArray6261<U>
  : T extends object
  ? DeepReadonlyObject6261<T>
  : T;

interface DeepReadonlyArray6261<T> extends ReadonlyArray<DeepReadonly6261<T>> {}

type DeepReadonlyObject6261<T> = {
  readonly [P in keyof T]: DeepReadonly6261<T[P]>;
};

type UnionToIntersection6261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6261<T> = UnionToIntersection6261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6261<T extends unknown[], V> = [...T, V];

type TuplifyUnion6261<T, L = LastOf6261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6261<TuplifyUnion6261<Exclude<T, L>>, L>;

type DeepPartial6261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6261<T[P]> }
  : T;

type Paths6261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6261<K, Paths6261<T[K], Prev6261[D]>> : never }[keyof T]
  : never;

type Prev6261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6261 {
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

type ConfigPaths6261 = Paths6261<NestedConfig6261>;

interface HeavyProps6261 {
  config: DeepPartial6261<NestedConfig6261>;
  path?: ConfigPaths6261;
}

const HeavyComponent6261 = memo(function HeavyComponent6261({ config }: HeavyProps6261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6261.displayName = 'HeavyComponent6261';
export default HeavyComponent6261;
