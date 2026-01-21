'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6085<T> = T extends (infer U)[]
  ? DeepReadonlyArray6085<U>
  : T extends object
  ? DeepReadonlyObject6085<T>
  : T;

interface DeepReadonlyArray6085<T> extends ReadonlyArray<DeepReadonly6085<T>> {}

type DeepReadonlyObject6085<T> = {
  readonly [P in keyof T]: DeepReadonly6085<T[P]>;
};

type UnionToIntersection6085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6085<T> = UnionToIntersection6085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6085<T extends unknown[], V> = [...T, V];

type TuplifyUnion6085<T, L = LastOf6085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6085<TuplifyUnion6085<Exclude<T, L>>, L>;

type DeepPartial6085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6085<T[P]> }
  : T;

type Paths6085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6085<K, Paths6085<T[K], Prev6085[D]>> : never }[keyof T]
  : never;

type Prev6085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6085 {
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

type ConfigPaths6085 = Paths6085<NestedConfig6085>;

interface HeavyProps6085 {
  config: DeepPartial6085<NestedConfig6085>;
  path?: ConfigPaths6085;
}

const HeavyComponent6085 = memo(function HeavyComponent6085({ config }: HeavyProps6085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6085.displayName = 'HeavyComponent6085';
export default HeavyComponent6085;
