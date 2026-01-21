'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2893<T> = T extends (infer U)[]
  ? DeepReadonlyArray2893<U>
  : T extends object
  ? DeepReadonlyObject2893<T>
  : T;

interface DeepReadonlyArray2893<T> extends ReadonlyArray<DeepReadonly2893<T>> {}

type DeepReadonlyObject2893<T> = {
  readonly [P in keyof T]: DeepReadonly2893<T[P]>;
};

type UnionToIntersection2893<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2893<T> = UnionToIntersection2893<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2893<T extends unknown[], V> = [...T, V];

type TuplifyUnion2893<T, L = LastOf2893<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2893<TuplifyUnion2893<Exclude<T, L>>, L>;

type DeepPartial2893<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2893<T[P]> }
  : T;

type Paths2893<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2893<K, Paths2893<T[K], Prev2893[D]>> : never }[keyof T]
  : never;

type Prev2893 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2893<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2893 {
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

type ConfigPaths2893 = Paths2893<NestedConfig2893>;

interface HeavyProps2893 {
  config: DeepPartial2893<NestedConfig2893>;
  path?: ConfigPaths2893;
}

const HeavyComponent2893 = memo(function HeavyComponent2893({ config }: HeavyProps2893) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2893) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2893 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2893: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2893.displayName = 'HeavyComponent2893';
export default HeavyComponent2893;
