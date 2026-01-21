'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6220<T> = T extends (infer U)[]
  ? DeepReadonlyArray6220<U>
  : T extends object
  ? DeepReadonlyObject6220<T>
  : T;

interface DeepReadonlyArray6220<T> extends ReadonlyArray<DeepReadonly6220<T>> {}

type DeepReadonlyObject6220<T> = {
  readonly [P in keyof T]: DeepReadonly6220<T[P]>;
};

type UnionToIntersection6220<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6220<T> = UnionToIntersection6220<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6220<T extends unknown[], V> = [...T, V];

type TuplifyUnion6220<T, L = LastOf6220<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6220<TuplifyUnion6220<Exclude<T, L>>, L>;

type DeepPartial6220<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6220<T[P]> }
  : T;

type Paths6220<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6220<K, Paths6220<T[K], Prev6220[D]>> : never }[keyof T]
  : never;

type Prev6220 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6220<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6220 {
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

type ConfigPaths6220 = Paths6220<NestedConfig6220>;

interface HeavyProps6220 {
  config: DeepPartial6220<NestedConfig6220>;
  path?: ConfigPaths6220;
}

const HeavyComponent6220 = memo(function HeavyComponent6220({ config }: HeavyProps6220) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6220) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6220 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6220: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6220.displayName = 'HeavyComponent6220';
export default HeavyComponent6220;
