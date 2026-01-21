'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly780<T> = T extends (infer U)[]
  ? DeepReadonlyArray780<U>
  : T extends object
  ? DeepReadonlyObject780<T>
  : T;

interface DeepReadonlyArray780<T> extends ReadonlyArray<DeepReadonly780<T>> {}

type DeepReadonlyObject780<T> = {
  readonly [P in keyof T]: DeepReadonly780<T[P]>;
};

type UnionToIntersection780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf780<T> = UnionToIntersection780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push780<T extends unknown[], V> = [...T, V];

type TuplifyUnion780<T, L = LastOf780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push780<TuplifyUnion780<Exclude<T, L>>, L>;

type DeepPartial780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial780<T[P]> }
  : T;

type Paths780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join780<K, Paths780<T[K], Prev780[D]>> : never }[keyof T]
  : never;

type Prev780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig780 {
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

type ConfigPaths780 = Paths780<NestedConfig780>;

interface HeavyProps780 {
  config: DeepPartial780<NestedConfig780>;
  path?: ConfigPaths780;
}

const HeavyComponent780 = memo(function HeavyComponent780({ config }: HeavyProps780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent780.displayName = 'HeavyComponent780';
export default HeavyComponent780;
