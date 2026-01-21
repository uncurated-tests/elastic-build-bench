'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6781<T> = T extends (infer U)[]
  ? DeepReadonlyArray6781<U>
  : T extends object
  ? DeepReadonlyObject6781<T>
  : T;

interface DeepReadonlyArray6781<T> extends ReadonlyArray<DeepReadonly6781<T>> {}

type DeepReadonlyObject6781<T> = {
  readonly [P in keyof T]: DeepReadonly6781<T[P]>;
};

type UnionToIntersection6781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6781<T> = UnionToIntersection6781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6781<T extends unknown[], V> = [...T, V];

type TuplifyUnion6781<T, L = LastOf6781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6781<TuplifyUnion6781<Exclude<T, L>>, L>;

type DeepPartial6781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6781<T[P]> }
  : T;

type Paths6781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6781<K, Paths6781<T[K], Prev6781[D]>> : never }[keyof T]
  : never;

type Prev6781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6781 {
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

type ConfigPaths6781 = Paths6781<NestedConfig6781>;

interface HeavyProps6781 {
  config: DeepPartial6781<NestedConfig6781>;
  path?: ConfigPaths6781;
}

const HeavyComponent6781 = memo(function HeavyComponent6781({ config }: HeavyProps6781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6781.displayName = 'HeavyComponent6781';
export default HeavyComponent6781;
