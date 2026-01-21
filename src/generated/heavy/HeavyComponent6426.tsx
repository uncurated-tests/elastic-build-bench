'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6426<T> = T extends (infer U)[]
  ? DeepReadonlyArray6426<U>
  : T extends object
  ? DeepReadonlyObject6426<T>
  : T;

interface DeepReadonlyArray6426<T> extends ReadonlyArray<DeepReadonly6426<T>> {}

type DeepReadonlyObject6426<T> = {
  readonly [P in keyof T]: DeepReadonly6426<T[P]>;
};

type UnionToIntersection6426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6426<T> = UnionToIntersection6426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6426<T extends unknown[], V> = [...T, V];

type TuplifyUnion6426<T, L = LastOf6426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6426<TuplifyUnion6426<Exclude<T, L>>, L>;

type DeepPartial6426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6426<T[P]> }
  : T;

type Paths6426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6426<K, Paths6426<T[K], Prev6426[D]>> : never }[keyof T]
  : never;

type Prev6426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6426 {
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

type ConfigPaths6426 = Paths6426<NestedConfig6426>;

interface HeavyProps6426 {
  config: DeepPartial6426<NestedConfig6426>;
  path?: ConfigPaths6426;
}

const HeavyComponent6426 = memo(function HeavyComponent6426({ config }: HeavyProps6426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6426.displayName = 'HeavyComponent6426';
export default HeavyComponent6426;
