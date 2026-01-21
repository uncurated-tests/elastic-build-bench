'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2732<T> = T extends (infer U)[]
  ? DeepReadonlyArray2732<U>
  : T extends object
  ? DeepReadonlyObject2732<T>
  : T;

interface DeepReadonlyArray2732<T> extends ReadonlyArray<DeepReadonly2732<T>> {}

type DeepReadonlyObject2732<T> = {
  readonly [P in keyof T]: DeepReadonly2732<T[P]>;
};

type UnionToIntersection2732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2732<T> = UnionToIntersection2732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2732<T extends unknown[], V> = [...T, V];

type TuplifyUnion2732<T, L = LastOf2732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2732<TuplifyUnion2732<Exclude<T, L>>, L>;

type DeepPartial2732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2732<T[P]> }
  : T;

type Paths2732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2732<K, Paths2732<T[K], Prev2732[D]>> : never }[keyof T]
  : never;

type Prev2732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2732 {
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

type ConfigPaths2732 = Paths2732<NestedConfig2732>;

interface HeavyProps2732 {
  config: DeepPartial2732<NestedConfig2732>;
  path?: ConfigPaths2732;
}

const HeavyComponent2732 = memo(function HeavyComponent2732({ config }: HeavyProps2732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2732.displayName = 'HeavyComponent2732';
export default HeavyComponent2732;
