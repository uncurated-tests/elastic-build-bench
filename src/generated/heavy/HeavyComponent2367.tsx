'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2367<T> = T extends (infer U)[]
  ? DeepReadonlyArray2367<U>
  : T extends object
  ? DeepReadonlyObject2367<T>
  : T;

interface DeepReadonlyArray2367<T> extends ReadonlyArray<DeepReadonly2367<T>> {}

type DeepReadonlyObject2367<T> = {
  readonly [P in keyof T]: DeepReadonly2367<T[P]>;
};

type UnionToIntersection2367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2367<T> = UnionToIntersection2367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2367<T extends unknown[], V> = [...T, V];

type TuplifyUnion2367<T, L = LastOf2367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2367<TuplifyUnion2367<Exclude<T, L>>, L>;

type DeepPartial2367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2367<T[P]> }
  : T;

type Paths2367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2367<K, Paths2367<T[K], Prev2367[D]>> : never }[keyof T]
  : never;

type Prev2367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2367 {
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

type ConfigPaths2367 = Paths2367<NestedConfig2367>;

interface HeavyProps2367 {
  config: DeepPartial2367<NestedConfig2367>;
  path?: ConfigPaths2367;
}

const HeavyComponent2367 = memo(function HeavyComponent2367({ config }: HeavyProps2367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2367.displayName = 'HeavyComponent2367';
export default HeavyComponent2367;
