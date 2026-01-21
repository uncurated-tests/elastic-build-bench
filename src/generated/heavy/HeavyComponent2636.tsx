'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2636<T> = T extends (infer U)[]
  ? DeepReadonlyArray2636<U>
  : T extends object
  ? DeepReadonlyObject2636<T>
  : T;

interface DeepReadonlyArray2636<T> extends ReadonlyArray<DeepReadonly2636<T>> {}

type DeepReadonlyObject2636<T> = {
  readonly [P in keyof T]: DeepReadonly2636<T[P]>;
};

type UnionToIntersection2636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2636<T> = UnionToIntersection2636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2636<T extends unknown[], V> = [...T, V];

type TuplifyUnion2636<T, L = LastOf2636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2636<TuplifyUnion2636<Exclude<T, L>>, L>;

type DeepPartial2636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2636<T[P]> }
  : T;

type Paths2636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2636<K, Paths2636<T[K], Prev2636[D]>> : never }[keyof T]
  : never;

type Prev2636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2636 {
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

type ConfigPaths2636 = Paths2636<NestedConfig2636>;

interface HeavyProps2636 {
  config: DeepPartial2636<NestedConfig2636>;
  path?: ConfigPaths2636;
}

const HeavyComponent2636 = memo(function HeavyComponent2636({ config }: HeavyProps2636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2636.displayName = 'HeavyComponent2636';
export default HeavyComponent2636;
