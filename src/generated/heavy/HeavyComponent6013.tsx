'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6013<T> = T extends (infer U)[]
  ? DeepReadonlyArray6013<U>
  : T extends object
  ? DeepReadonlyObject6013<T>
  : T;

interface DeepReadonlyArray6013<T> extends ReadonlyArray<DeepReadonly6013<T>> {}

type DeepReadonlyObject6013<T> = {
  readonly [P in keyof T]: DeepReadonly6013<T[P]>;
};

type UnionToIntersection6013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6013<T> = UnionToIntersection6013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6013<T extends unknown[], V> = [...T, V];

type TuplifyUnion6013<T, L = LastOf6013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6013<TuplifyUnion6013<Exclude<T, L>>, L>;

type DeepPartial6013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6013<T[P]> }
  : T;

type Paths6013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6013<K, Paths6013<T[K], Prev6013[D]>> : never }[keyof T]
  : never;

type Prev6013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6013 {
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

type ConfigPaths6013 = Paths6013<NestedConfig6013>;

interface HeavyProps6013 {
  config: DeepPartial6013<NestedConfig6013>;
  path?: ConfigPaths6013;
}

const HeavyComponent6013 = memo(function HeavyComponent6013({ config }: HeavyProps6013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6013.displayName = 'HeavyComponent6013';
export default HeavyComponent6013;
