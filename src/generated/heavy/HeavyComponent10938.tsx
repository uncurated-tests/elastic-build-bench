'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10938<T> = T extends (infer U)[]
  ? DeepReadonlyArray10938<U>
  : T extends object
  ? DeepReadonlyObject10938<T>
  : T;

interface DeepReadonlyArray10938<T> extends ReadonlyArray<DeepReadonly10938<T>> {}

type DeepReadonlyObject10938<T> = {
  readonly [P in keyof T]: DeepReadonly10938<T[P]>;
};

type UnionToIntersection10938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10938<T> = UnionToIntersection10938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10938<T extends unknown[], V> = [...T, V];

type TuplifyUnion10938<T, L = LastOf10938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10938<TuplifyUnion10938<Exclude<T, L>>, L>;

type DeepPartial10938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10938<T[P]> }
  : T;

type Paths10938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10938<K, Paths10938<T[K], Prev10938[D]>> : never }[keyof T]
  : never;

type Prev10938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10938 {
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

type ConfigPaths10938 = Paths10938<NestedConfig10938>;

interface HeavyProps10938 {
  config: DeepPartial10938<NestedConfig10938>;
  path?: ConfigPaths10938;
}

const HeavyComponent10938 = memo(function HeavyComponent10938({ config }: HeavyProps10938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10938.displayName = 'HeavyComponent10938';
export default HeavyComponent10938;
