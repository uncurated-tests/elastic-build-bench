'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2720<T> = T extends (infer U)[]
  ? DeepReadonlyArray2720<U>
  : T extends object
  ? DeepReadonlyObject2720<T>
  : T;

interface DeepReadonlyArray2720<T> extends ReadonlyArray<DeepReadonly2720<T>> {}

type DeepReadonlyObject2720<T> = {
  readonly [P in keyof T]: DeepReadonly2720<T[P]>;
};

type UnionToIntersection2720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2720<T> = UnionToIntersection2720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2720<T extends unknown[], V> = [...T, V];

type TuplifyUnion2720<T, L = LastOf2720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2720<TuplifyUnion2720<Exclude<T, L>>, L>;

type DeepPartial2720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2720<T[P]> }
  : T;

type Paths2720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2720<K, Paths2720<T[K], Prev2720[D]>> : never }[keyof T]
  : never;

type Prev2720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2720 {
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

type ConfigPaths2720 = Paths2720<NestedConfig2720>;

interface HeavyProps2720 {
  config: DeepPartial2720<NestedConfig2720>;
  path?: ConfigPaths2720;
}

const HeavyComponent2720 = memo(function HeavyComponent2720({ config }: HeavyProps2720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2720.displayName = 'HeavyComponent2720';
export default HeavyComponent2720;
