'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2475<T> = T extends (infer U)[]
  ? DeepReadonlyArray2475<U>
  : T extends object
  ? DeepReadonlyObject2475<T>
  : T;

interface DeepReadonlyArray2475<T> extends ReadonlyArray<DeepReadonly2475<T>> {}

type DeepReadonlyObject2475<T> = {
  readonly [P in keyof T]: DeepReadonly2475<T[P]>;
};

type UnionToIntersection2475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2475<T> = UnionToIntersection2475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2475<T extends unknown[], V> = [...T, V];

type TuplifyUnion2475<T, L = LastOf2475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2475<TuplifyUnion2475<Exclude<T, L>>, L>;

type DeepPartial2475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2475<T[P]> }
  : T;

type Paths2475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2475<K, Paths2475<T[K], Prev2475[D]>> : never }[keyof T]
  : never;

type Prev2475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2475 {
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

type ConfigPaths2475 = Paths2475<NestedConfig2475>;

interface HeavyProps2475 {
  config: DeepPartial2475<NestedConfig2475>;
  path?: ConfigPaths2475;
}

const HeavyComponent2475 = memo(function HeavyComponent2475({ config }: HeavyProps2475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2475.displayName = 'HeavyComponent2475';
export default HeavyComponent2475;
