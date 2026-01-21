'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1215<T> = T extends (infer U)[]
  ? DeepReadonlyArray1215<U>
  : T extends object
  ? DeepReadonlyObject1215<T>
  : T;

interface DeepReadonlyArray1215<T> extends ReadonlyArray<DeepReadonly1215<T>> {}

type DeepReadonlyObject1215<T> = {
  readonly [P in keyof T]: DeepReadonly1215<T[P]>;
};

type UnionToIntersection1215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1215<T> = UnionToIntersection1215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1215<T extends unknown[], V> = [...T, V];

type TuplifyUnion1215<T, L = LastOf1215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1215<TuplifyUnion1215<Exclude<T, L>>, L>;

type DeepPartial1215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1215<T[P]> }
  : T;

type Paths1215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1215<K, Paths1215<T[K], Prev1215[D]>> : never }[keyof T]
  : never;

type Prev1215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1215 {
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

type ConfigPaths1215 = Paths1215<NestedConfig1215>;

interface HeavyProps1215 {
  config: DeepPartial1215<NestedConfig1215>;
  path?: ConfigPaths1215;
}

const HeavyComponent1215 = memo(function HeavyComponent1215({ config }: HeavyProps1215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1215.displayName = 'HeavyComponent1215';
export default HeavyComponent1215;
