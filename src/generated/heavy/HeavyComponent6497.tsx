'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6497<T> = T extends (infer U)[]
  ? DeepReadonlyArray6497<U>
  : T extends object
  ? DeepReadonlyObject6497<T>
  : T;

interface DeepReadonlyArray6497<T> extends ReadonlyArray<DeepReadonly6497<T>> {}

type DeepReadonlyObject6497<T> = {
  readonly [P in keyof T]: DeepReadonly6497<T[P]>;
};

type UnionToIntersection6497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6497<T> = UnionToIntersection6497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6497<T extends unknown[], V> = [...T, V];

type TuplifyUnion6497<T, L = LastOf6497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6497<TuplifyUnion6497<Exclude<T, L>>, L>;

type DeepPartial6497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6497<T[P]> }
  : T;

type Paths6497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6497<K, Paths6497<T[K], Prev6497[D]>> : never }[keyof T]
  : never;

type Prev6497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6497 {
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

type ConfigPaths6497 = Paths6497<NestedConfig6497>;

interface HeavyProps6497 {
  config: DeepPartial6497<NestedConfig6497>;
  path?: ConfigPaths6497;
}

const HeavyComponent6497 = memo(function HeavyComponent6497({ config }: HeavyProps6497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6497.displayName = 'HeavyComponent6497';
export default HeavyComponent6497;
