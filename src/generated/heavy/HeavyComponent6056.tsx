'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6056<T> = T extends (infer U)[]
  ? DeepReadonlyArray6056<U>
  : T extends object
  ? DeepReadonlyObject6056<T>
  : T;

interface DeepReadonlyArray6056<T> extends ReadonlyArray<DeepReadonly6056<T>> {}

type DeepReadonlyObject6056<T> = {
  readonly [P in keyof T]: DeepReadonly6056<T[P]>;
};

type UnionToIntersection6056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6056<T> = UnionToIntersection6056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6056<T extends unknown[], V> = [...T, V];

type TuplifyUnion6056<T, L = LastOf6056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6056<TuplifyUnion6056<Exclude<T, L>>, L>;

type DeepPartial6056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6056<T[P]> }
  : T;

type Paths6056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6056<K, Paths6056<T[K], Prev6056[D]>> : never }[keyof T]
  : never;

type Prev6056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6056 {
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

type ConfigPaths6056 = Paths6056<NestedConfig6056>;

interface HeavyProps6056 {
  config: DeepPartial6056<NestedConfig6056>;
  path?: ConfigPaths6056;
}

const HeavyComponent6056 = memo(function HeavyComponent6056({ config }: HeavyProps6056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6056.displayName = 'HeavyComponent6056';
export default HeavyComponent6056;
