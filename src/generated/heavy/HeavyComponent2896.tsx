'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2896<T> = T extends (infer U)[]
  ? DeepReadonlyArray2896<U>
  : T extends object
  ? DeepReadonlyObject2896<T>
  : T;

interface DeepReadonlyArray2896<T> extends ReadonlyArray<DeepReadonly2896<T>> {}

type DeepReadonlyObject2896<T> = {
  readonly [P in keyof T]: DeepReadonly2896<T[P]>;
};

type UnionToIntersection2896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2896<T> = UnionToIntersection2896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2896<T extends unknown[], V> = [...T, V];

type TuplifyUnion2896<T, L = LastOf2896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2896<TuplifyUnion2896<Exclude<T, L>>, L>;

type DeepPartial2896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2896<T[P]> }
  : T;

type Paths2896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2896<K, Paths2896<T[K], Prev2896[D]>> : never }[keyof T]
  : never;

type Prev2896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2896 {
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

type ConfigPaths2896 = Paths2896<NestedConfig2896>;

interface HeavyProps2896 {
  config: DeepPartial2896<NestedConfig2896>;
  path?: ConfigPaths2896;
}

const HeavyComponent2896 = memo(function HeavyComponent2896({ config }: HeavyProps2896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2896.displayName = 'HeavyComponent2896';
export default HeavyComponent2896;
