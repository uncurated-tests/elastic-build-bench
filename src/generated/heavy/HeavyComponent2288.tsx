'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2288<T> = T extends (infer U)[]
  ? DeepReadonlyArray2288<U>
  : T extends object
  ? DeepReadonlyObject2288<T>
  : T;

interface DeepReadonlyArray2288<T> extends ReadonlyArray<DeepReadonly2288<T>> {}

type DeepReadonlyObject2288<T> = {
  readonly [P in keyof T]: DeepReadonly2288<T[P]>;
};

type UnionToIntersection2288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2288<T> = UnionToIntersection2288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2288<T extends unknown[], V> = [...T, V];

type TuplifyUnion2288<T, L = LastOf2288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2288<TuplifyUnion2288<Exclude<T, L>>, L>;

type DeepPartial2288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2288<T[P]> }
  : T;

type Paths2288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2288<K, Paths2288<T[K], Prev2288[D]>> : never }[keyof T]
  : never;

type Prev2288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2288 {
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

type ConfigPaths2288 = Paths2288<NestedConfig2288>;

interface HeavyProps2288 {
  config: DeepPartial2288<NestedConfig2288>;
  path?: ConfigPaths2288;
}

const HeavyComponent2288 = memo(function HeavyComponent2288({ config }: HeavyProps2288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2288.displayName = 'HeavyComponent2288';
export default HeavyComponent2288;
