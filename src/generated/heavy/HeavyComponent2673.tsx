'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2673<T> = T extends (infer U)[]
  ? DeepReadonlyArray2673<U>
  : T extends object
  ? DeepReadonlyObject2673<T>
  : T;

interface DeepReadonlyArray2673<T> extends ReadonlyArray<DeepReadonly2673<T>> {}

type DeepReadonlyObject2673<T> = {
  readonly [P in keyof T]: DeepReadonly2673<T[P]>;
};

type UnionToIntersection2673<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2673<T> = UnionToIntersection2673<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2673<T extends unknown[], V> = [...T, V];

type TuplifyUnion2673<T, L = LastOf2673<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2673<TuplifyUnion2673<Exclude<T, L>>, L>;

type DeepPartial2673<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2673<T[P]> }
  : T;

type Paths2673<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2673<K, Paths2673<T[K], Prev2673[D]>> : never }[keyof T]
  : never;

type Prev2673 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2673<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2673 {
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

type ConfigPaths2673 = Paths2673<NestedConfig2673>;

interface HeavyProps2673 {
  config: DeepPartial2673<NestedConfig2673>;
  path?: ConfigPaths2673;
}

const HeavyComponent2673 = memo(function HeavyComponent2673({ config }: HeavyProps2673) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2673) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2673 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2673: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2673.displayName = 'HeavyComponent2673';
export default HeavyComponent2673;
