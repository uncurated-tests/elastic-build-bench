'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly496<T> = T extends (infer U)[]
  ? DeepReadonlyArray496<U>
  : T extends object
  ? DeepReadonlyObject496<T>
  : T;

interface DeepReadonlyArray496<T> extends ReadonlyArray<DeepReadonly496<T>> {}

type DeepReadonlyObject496<T> = {
  readonly [P in keyof T]: DeepReadonly496<T[P]>;
};

type UnionToIntersection496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf496<T> = UnionToIntersection496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push496<T extends unknown[], V> = [...T, V];

type TuplifyUnion496<T, L = LastOf496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push496<TuplifyUnion496<Exclude<T, L>>, L>;

type DeepPartial496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial496<T[P]> }
  : T;

type Paths496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join496<K, Paths496<T[K], Prev496[D]>> : never }[keyof T]
  : never;

type Prev496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig496 {
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

type ConfigPaths496 = Paths496<NestedConfig496>;

interface HeavyProps496 {
  config: DeepPartial496<NestedConfig496>;
  path?: ConfigPaths496;
}

const HeavyComponent496 = memo(function HeavyComponent496({ config }: HeavyProps496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent496.displayName = 'HeavyComponent496';
export default HeavyComponent496;
