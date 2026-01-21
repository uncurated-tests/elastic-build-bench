'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6954<T> = T extends (infer U)[]
  ? DeepReadonlyArray6954<U>
  : T extends object
  ? DeepReadonlyObject6954<T>
  : T;

interface DeepReadonlyArray6954<T> extends ReadonlyArray<DeepReadonly6954<T>> {}

type DeepReadonlyObject6954<T> = {
  readonly [P in keyof T]: DeepReadonly6954<T[P]>;
};

type UnionToIntersection6954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6954<T> = UnionToIntersection6954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6954<T extends unknown[], V> = [...T, V];

type TuplifyUnion6954<T, L = LastOf6954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6954<TuplifyUnion6954<Exclude<T, L>>, L>;

type DeepPartial6954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6954<T[P]> }
  : T;

type Paths6954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6954<K, Paths6954<T[K], Prev6954[D]>> : never }[keyof T]
  : never;

type Prev6954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6954 {
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

type ConfigPaths6954 = Paths6954<NestedConfig6954>;

interface HeavyProps6954 {
  config: DeepPartial6954<NestedConfig6954>;
  path?: ConfigPaths6954;
}

const HeavyComponent6954 = memo(function HeavyComponent6954({ config }: HeavyProps6954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6954.displayName = 'HeavyComponent6954';
export default HeavyComponent6954;
