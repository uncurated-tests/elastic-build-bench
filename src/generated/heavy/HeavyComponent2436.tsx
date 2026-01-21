'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2436<T> = T extends (infer U)[]
  ? DeepReadonlyArray2436<U>
  : T extends object
  ? DeepReadonlyObject2436<T>
  : T;

interface DeepReadonlyArray2436<T> extends ReadonlyArray<DeepReadonly2436<T>> {}

type DeepReadonlyObject2436<T> = {
  readonly [P in keyof T]: DeepReadonly2436<T[P]>;
};

type UnionToIntersection2436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2436<T> = UnionToIntersection2436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2436<T extends unknown[], V> = [...T, V];

type TuplifyUnion2436<T, L = LastOf2436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2436<TuplifyUnion2436<Exclude<T, L>>, L>;

type DeepPartial2436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2436<T[P]> }
  : T;

type Paths2436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2436<K, Paths2436<T[K], Prev2436[D]>> : never }[keyof T]
  : never;

type Prev2436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2436 {
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

type ConfigPaths2436 = Paths2436<NestedConfig2436>;

interface HeavyProps2436 {
  config: DeepPartial2436<NestedConfig2436>;
  path?: ConfigPaths2436;
}

const HeavyComponent2436 = memo(function HeavyComponent2436({ config }: HeavyProps2436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2436.displayName = 'HeavyComponent2436';
export default HeavyComponent2436;
