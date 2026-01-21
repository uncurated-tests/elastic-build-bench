'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2634<T> = T extends (infer U)[]
  ? DeepReadonlyArray2634<U>
  : T extends object
  ? DeepReadonlyObject2634<T>
  : T;

interface DeepReadonlyArray2634<T> extends ReadonlyArray<DeepReadonly2634<T>> {}

type DeepReadonlyObject2634<T> = {
  readonly [P in keyof T]: DeepReadonly2634<T[P]>;
};

type UnionToIntersection2634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2634<T> = UnionToIntersection2634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2634<T extends unknown[], V> = [...T, V];

type TuplifyUnion2634<T, L = LastOf2634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2634<TuplifyUnion2634<Exclude<T, L>>, L>;

type DeepPartial2634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2634<T[P]> }
  : T;

type Paths2634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2634<K, Paths2634<T[K], Prev2634[D]>> : never }[keyof T]
  : never;

type Prev2634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2634 {
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

type ConfigPaths2634 = Paths2634<NestedConfig2634>;

interface HeavyProps2634 {
  config: DeepPartial2634<NestedConfig2634>;
  path?: ConfigPaths2634;
}

const HeavyComponent2634 = memo(function HeavyComponent2634({ config }: HeavyProps2634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2634.displayName = 'HeavyComponent2634';
export default HeavyComponent2634;
