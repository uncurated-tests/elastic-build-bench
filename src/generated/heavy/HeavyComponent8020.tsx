'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8020<T> = T extends (infer U)[]
  ? DeepReadonlyArray8020<U>
  : T extends object
  ? DeepReadonlyObject8020<T>
  : T;

interface DeepReadonlyArray8020<T> extends ReadonlyArray<DeepReadonly8020<T>> {}

type DeepReadonlyObject8020<T> = {
  readonly [P in keyof T]: DeepReadonly8020<T[P]>;
};

type UnionToIntersection8020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8020<T> = UnionToIntersection8020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8020<T extends unknown[], V> = [...T, V];

type TuplifyUnion8020<T, L = LastOf8020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8020<TuplifyUnion8020<Exclude<T, L>>, L>;

type DeepPartial8020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8020<T[P]> }
  : T;

type Paths8020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8020<K, Paths8020<T[K], Prev8020[D]>> : never }[keyof T]
  : never;

type Prev8020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8020 {
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

type ConfigPaths8020 = Paths8020<NestedConfig8020>;

interface HeavyProps8020 {
  config: DeepPartial8020<NestedConfig8020>;
  path?: ConfigPaths8020;
}

const HeavyComponent8020 = memo(function HeavyComponent8020({ config }: HeavyProps8020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8020.displayName = 'HeavyComponent8020';
export default HeavyComponent8020;
