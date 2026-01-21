'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2027<T> = T extends (infer U)[]
  ? DeepReadonlyArray2027<U>
  : T extends object
  ? DeepReadonlyObject2027<T>
  : T;

interface DeepReadonlyArray2027<T> extends ReadonlyArray<DeepReadonly2027<T>> {}

type DeepReadonlyObject2027<T> = {
  readonly [P in keyof T]: DeepReadonly2027<T[P]>;
};

type UnionToIntersection2027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2027<T> = UnionToIntersection2027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2027<T extends unknown[], V> = [...T, V];

type TuplifyUnion2027<T, L = LastOf2027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2027<TuplifyUnion2027<Exclude<T, L>>, L>;

type DeepPartial2027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2027<T[P]> }
  : T;

type Paths2027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2027<K, Paths2027<T[K], Prev2027[D]>> : never }[keyof T]
  : never;

type Prev2027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2027 {
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

type ConfigPaths2027 = Paths2027<NestedConfig2027>;

interface HeavyProps2027 {
  config: DeepPartial2027<NestedConfig2027>;
  path?: ConfigPaths2027;
}

const HeavyComponent2027 = memo(function HeavyComponent2027({ config }: HeavyProps2027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2027.displayName = 'HeavyComponent2027';
export default HeavyComponent2027;
