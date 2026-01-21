'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2156<T> = T extends (infer U)[]
  ? DeepReadonlyArray2156<U>
  : T extends object
  ? DeepReadonlyObject2156<T>
  : T;

interface DeepReadonlyArray2156<T> extends ReadonlyArray<DeepReadonly2156<T>> {}

type DeepReadonlyObject2156<T> = {
  readonly [P in keyof T]: DeepReadonly2156<T[P]>;
};

type UnionToIntersection2156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2156<T> = UnionToIntersection2156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2156<T extends unknown[], V> = [...T, V];

type TuplifyUnion2156<T, L = LastOf2156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2156<TuplifyUnion2156<Exclude<T, L>>, L>;

type DeepPartial2156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2156<T[P]> }
  : T;

type Paths2156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2156<K, Paths2156<T[K], Prev2156[D]>> : never }[keyof T]
  : never;

type Prev2156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2156 {
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

type ConfigPaths2156 = Paths2156<NestedConfig2156>;

interface HeavyProps2156 {
  config: DeepPartial2156<NestedConfig2156>;
  path?: ConfigPaths2156;
}

const HeavyComponent2156 = memo(function HeavyComponent2156({ config }: HeavyProps2156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2156.displayName = 'HeavyComponent2156';
export default HeavyComponent2156;
