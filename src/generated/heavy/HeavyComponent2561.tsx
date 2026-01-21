'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2561<T> = T extends (infer U)[]
  ? DeepReadonlyArray2561<U>
  : T extends object
  ? DeepReadonlyObject2561<T>
  : T;

interface DeepReadonlyArray2561<T> extends ReadonlyArray<DeepReadonly2561<T>> {}

type DeepReadonlyObject2561<T> = {
  readonly [P in keyof T]: DeepReadonly2561<T[P]>;
};

type UnionToIntersection2561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2561<T> = UnionToIntersection2561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2561<T extends unknown[], V> = [...T, V];

type TuplifyUnion2561<T, L = LastOf2561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2561<TuplifyUnion2561<Exclude<T, L>>, L>;

type DeepPartial2561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2561<T[P]> }
  : T;

type Paths2561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2561<K, Paths2561<T[K], Prev2561[D]>> : never }[keyof T]
  : never;

type Prev2561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2561 {
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

type ConfigPaths2561 = Paths2561<NestedConfig2561>;

interface HeavyProps2561 {
  config: DeepPartial2561<NestedConfig2561>;
  path?: ConfigPaths2561;
}

const HeavyComponent2561 = memo(function HeavyComponent2561({ config }: HeavyProps2561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2561.displayName = 'HeavyComponent2561';
export default HeavyComponent2561;
