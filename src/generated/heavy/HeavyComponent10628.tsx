'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10628<T> = T extends (infer U)[]
  ? DeepReadonlyArray10628<U>
  : T extends object
  ? DeepReadonlyObject10628<T>
  : T;

interface DeepReadonlyArray10628<T> extends ReadonlyArray<DeepReadonly10628<T>> {}

type DeepReadonlyObject10628<T> = {
  readonly [P in keyof T]: DeepReadonly10628<T[P]>;
};

type UnionToIntersection10628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10628<T> = UnionToIntersection10628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10628<T extends unknown[], V> = [...T, V];

type TuplifyUnion10628<T, L = LastOf10628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10628<TuplifyUnion10628<Exclude<T, L>>, L>;

type DeepPartial10628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10628<T[P]> }
  : T;

type Paths10628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10628<K, Paths10628<T[K], Prev10628[D]>> : never }[keyof T]
  : never;

type Prev10628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10628 {
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

type ConfigPaths10628 = Paths10628<NestedConfig10628>;

interface HeavyProps10628 {
  config: DeepPartial10628<NestedConfig10628>;
  path?: ConfigPaths10628;
}

const HeavyComponent10628 = memo(function HeavyComponent10628({ config }: HeavyProps10628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10628.displayName = 'HeavyComponent10628';
export default HeavyComponent10628;
