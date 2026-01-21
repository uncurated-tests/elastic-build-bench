'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2869<T> = T extends (infer U)[]
  ? DeepReadonlyArray2869<U>
  : T extends object
  ? DeepReadonlyObject2869<T>
  : T;

interface DeepReadonlyArray2869<T> extends ReadonlyArray<DeepReadonly2869<T>> {}

type DeepReadonlyObject2869<T> = {
  readonly [P in keyof T]: DeepReadonly2869<T[P]>;
};

type UnionToIntersection2869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2869<T> = UnionToIntersection2869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2869<T extends unknown[], V> = [...T, V];

type TuplifyUnion2869<T, L = LastOf2869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2869<TuplifyUnion2869<Exclude<T, L>>, L>;

type DeepPartial2869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2869<T[P]> }
  : T;

type Paths2869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2869<K, Paths2869<T[K], Prev2869[D]>> : never }[keyof T]
  : never;

type Prev2869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2869 {
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

type ConfigPaths2869 = Paths2869<NestedConfig2869>;

interface HeavyProps2869 {
  config: DeepPartial2869<NestedConfig2869>;
  path?: ConfigPaths2869;
}

const HeavyComponent2869 = memo(function HeavyComponent2869({ config }: HeavyProps2869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2869.displayName = 'HeavyComponent2869';
export default HeavyComponent2869;
