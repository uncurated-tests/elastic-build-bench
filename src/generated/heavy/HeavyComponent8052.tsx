'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8052<T> = T extends (infer U)[]
  ? DeepReadonlyArray8052<U>
  : T extends object
  ? DeepReadonlyObject8052<T>
  : T;

interface DeepReadonlyArray8052<T> extends ReadonlyArray<DeepReadonly8052<T>> {}

type DeepReadonlyObject8052<T> = {
  readonly [P in keyof T]: DeepReadonly8052<T[P]>;
};

type UnionToIntersection8052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8052<T> = UnionToIntersection8052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8052<T extends unknown[], V> = [...T, V];

type TuplifyUnion8052<T, L = LastOf8052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8052<TuplifyUnion8052<Exclude<T, L>>, L>;

type DeepPartial8052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8052<T[P]> }
  : T;

type Paths8052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8052<K, Paths8052<T[K], Prev8052[D]>> : never }[keyof T]
  : never;

type Prev8052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8052 {
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

type ConfigPaths8052 = Paths8052<NestedConfig8052>;

interface HeavyProps8052 {
  config: DeepPartial8052<NestedConfig8052>;
  path?: ConfigPaths8052;
}

const HeavyComponent8052 = memo(function HeavyComponent8052({ config }: HeavyProps8052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8052.displayName = 'HeavyComponent8052';
export default HeavyComponent8052;
