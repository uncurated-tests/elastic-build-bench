'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8446<T> = T extends (infer U)[]
  ? DeepReadonlyArray8446<U>
  : T extends object
  ? DeepReadonlyObject8446<T>
  : T;

interface DeepReadonlyArray8446<T> extends ReadonlyArray<DeepReadonly8446<T>> {}

type DeepReadonlyObject8446<T> = {
  readonly [P in keyof T]: DeepReadonly8446<T[P]>;
};

type UnionToIntersection8446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8446<T> = UnionToIntersection8446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8446<T extends unknown[], V> = [...T, V];

type TuplifyUnion8446<T, L = LastOf8446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8446<TuplifyUnion8446<Exclude<T, L>>, L>;

type DeepPartial8446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8446<T[P]> }
  : T;

type Paths8446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8446<K, Paths8446<T[K], Prev8446[D]>> : never }[keyof T]
  : never;

type Prev8446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8446 {
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

type ConfigPaths8446 = Paths8446<NestedConfig8446>;

interface HeavyProps8446 {
  config: DeepPartial8446<NestedConfig8446>;
  path?: ConfigPaths8446;
}

const HeavyComponent8446 = memo(function HeavyComponent8446({ config }: HeavyProps8446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8446.displayName = 'HeavyComponent8446';
export default HeavyComponent8446;
