'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2745<T> = T extends (infer U)[]
  ? DeepReadonlyArray2745<U>
  : T extends object
  ? DeepReadonlyObject2745<T>
  : T;

interface DeepReadonlyArray2745<T> extends ReadonlyArray<DeepReadonly2745<T>> {}

type DeepReadonlyObject2745<T> = {
  readonly [P in keyof T]: DeepReadonly2745<T[P]>;
};

type UnionToIntersection2745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2745<T> = UnionToIntersection2745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2745<T extends unknown[], V> = [...T, V];

type TuplifyUnion2745<T, L = LastOf2745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2745<TuplifyUnion2745<Exclude<T, L>>, L>;

type DeepPartial2745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2745<T[P]> }
  : T;

type Paths2745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2745<K, Paths2745<T[K], Prev2745[D]>> : never }[keyof T]
  : never;

type Prev2745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2745 {
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

type ConfigPaths2745 = Paths2745<NestedConfig2745>;

interface HeavyProps2745 {
  config: DeepPartial2745<NestedConfig2745>;
  path?: ConfigPaths2745;
}

const HeavyComponent2745 = memo(function HeavyComponent2745({ config }: HeavyProps2745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2745.displayName = 'HeavyComponent2745';
export default HeavyComponent2745;
