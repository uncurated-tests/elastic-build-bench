'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6621<T> = T extends (infer U)[]
  ? DeepReadonlyArray6621<U>
  : T extends object
  ? DeepReadonlyObject6621<T>
  : T;

interface DeepReadonlyArray6621<T> extends ReadonlyArray<DeepReadonly6621<T>> {}

type DeepReadonlyObject6621<T> = {
  readonly [P in keyof T]: DeepReadonly6621<T[P]>;
};

type UnionToIntersection6621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6621<T> = UnionToIntersection6621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6621<T extends unknown[], V> = [...T, V];

type TuplifyUnion6621<T, L = LastOf6621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6621<TuplifyUnion6621<Exclude<T, L>>, L>;

type DeepPartial6621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6621<T[P]> }
  : T;

type Paths6621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6621<K, Paths6621<T[K], Prev6621[D]>> : never }[keyof T]
  : never;

type Prev6621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6621 {
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

type ConfigPaths6621 = Paths6621<NestedConfig6621>;

interface HeavyProps6621 {
  config: DeepPartial6621<NestedConfig6621>;
  path?: ConfigPaths6621;
}

const HeavyComponent6621 = memo(function HeavyComponent6621({ config }: HeavyProps6621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6621.displayName = 'HeavyComponent6621';
export default HeavyComponent6621;
