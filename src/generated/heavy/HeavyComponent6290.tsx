'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6290<T> = T extends (infer U)[]
  ? DeepReadonlyArray6290<U>
  : T extends object
  ? DeepReadonlyObject6290<T>
  : T;

interface DeepReadonlyArray6290<T> extends ReadonlyArray<DeepReadonly6290<T>> {}

type DeepReadonlyObject6290<T> = {
  readonly [P in keyof T]: DeepReadonly6290<T[P]>;
};

type UnionToIntersection6290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6290<T> = UnionToIntersection6290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6290<T extends unknown[], V> = [...T, V];

type TuplifyUnion6290<T, L = LastOf6290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6290<TuplifyUnion6290<Exclude<T, L>>, L>;

type DeepPartial6290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6290<T[P]> }
  : T;

type Paths6290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6290<K, Paths6290<T[K], Prev6290[D]>> : never }[keyof T]
  : never;

type Prev6290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6290 {
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

type ConfigPaths6290 = Paths6290<NestedConfig6290>;

interface HeavyProps6290 {
  config: DeepPartial6290<NestedConfig6290>;
  path?: ConfigPaths6290;
}

const HeavyComponent6290 = memo(function HeavyComponent6290({ config }: HeavyProps6290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6290.displayName = 'HeavyComponent6290';
export default HeavyComponent6290;
