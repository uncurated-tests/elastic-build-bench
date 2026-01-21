'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8186<T> = T extends (infer U)[]
  ? DeepReadonlyArray8186<U>
  : T extends object
  ? DeepReadonlyObject8186<T>
  : T;

interface DeepReadonlyArray8186<T> extends ReadonlyArray<DeepReadonly8186<T>> {}

type DeepReadonlyObject8186<T> = {
  readonly [P in keyof T]: DeepReadonly8186<T[P]>;
};

type UnionToIntersection8186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8186<T> = UnionToIntersection8186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8186<T extends unknown[], V> = [...T, V];

type TuplifyUnion8186<T, L = LastOf8186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8186<TuplifyUnion8186<Exclude<T, L>>, L>;

type DeepPartial8186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8186<T[P]> }
  : T;

type Paths8186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8186<K, Paths8186<T[K], Prev8186[D]>> : never }[keyof T]
  : never;

type Prev8186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8186 {
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

type ConfigPaths8186 = Paths8186<NestedConfig8186>;

interface HeavyProps8186 {
  config: DeepPartial8186<NestedConfig8186>;
  path?: ConfigPaths8186;
}

const HeavyComponent8186 = memo(function HeavyComponent8186({ config }: HeavyProps8186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8186.displayName = 'HeavyComponent8186';
export default HeavyComponent8186;
