'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly400<T> = T extends (infer U)[]
  ? DeepReadonlyArray400<U>
  : T extends object
  ? DeepReadonlyObject400<T>
  : T;

interface DeepReadonlyArray400<T> extends ReadonlyArray<DeepReadonly400<T>> {}

type DeepReadonlyObject400<T> = {
  readonly [P in keyof T]: DeepReadonly400<T[P]>;
};

type UnionToIntersection400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf400<T> = UnionToIntersection400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push400<T extends unknown[], V> = [...T, V];

type TuplifyUnion400<T, L = LastOf400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push400<TuplifyUnion400<Exclude<T, L>>, L>;

type DeepPartial400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial400<T[P]> }
  : T;

type Paths400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join400<K, Paths400<T[K], Prev400[D]>> : never }[keyof T]
  : never;

type Prev400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig400 {
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

type ConfigPaths400 = Paths400<NestedConfig400>;

interface HeavyProps400 {
  config: DeepPartial400<NestedConfig400>;
  path?: ConfigPaths400;
}

const HeavyComponent400 = memo(function HeavyComponent400({ config }: HeavyProps400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent400.displayName = 'HeavyComponent400';
export default HeavyComponent400;
