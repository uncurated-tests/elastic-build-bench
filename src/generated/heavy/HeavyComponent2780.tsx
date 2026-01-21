'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2780<T> = T extends (infer U)[]
  ? DeepReadonlyArray2780<U>
  : T extends object
  ? DeepReadonlyObject2780<T>
  : T;

interface DeepReadonlyArray2780<T> extends ReadonlyArray<DeepReadonly2780<T>> {}

type DeepReadonlyObject2780<T> = {
  readonly [P in keyof T]: DeepReadonly2780<T[P]>;
};

type UnionToIntersection2780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2780<T> = UnionToIntersection2780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2780<T extends unknown[], V> = [...T, V];

type TuplifyUnion2780<T, L = LastOf2780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2780<TuplifyUnion2780<Exclude<T, L>>, L>;

type DeepPartial2780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2780<T[P]> }
  : T;

type Paths2780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2780<K, Paths2780<T[K], Prev2780[D]>> : never }[keyof T]
  : never;

type Prev2780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2780 {
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

type ConfigPaths2780 = Paths2780<NestedConfig2780>;

interface HeavyProps2780 {
  config: DeepPartial2780<NestedConfig2780>;
  path?: ConfigPaths2780;
}

const HeavyComponent2780 = memo(function HeavyComponent2780({ config }: HeavyProps2780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2780.displayName = 'HeavyComponent2780';
export default HeavyComponent2780;
