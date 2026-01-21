'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8486<T> = T extends (infer U)[]
  ? DeepReadonlyArray8486<U>
  : T extends object
  ? DeepReadonlyObject8486<T>
  : T;

interface DeepReadonlyArray8486<T> extends ReadonlyArray<DeepReadonly8486<T>> {}

type DeepReadonlyObject8486<T> = {
  readonly [P in keyof T]: DeepReadonly8486<T[P]>;
};

type UnionToIntersection8486<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8486<T> = UnionToIntersection8486<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8486<T extends unknown[], V> = [...T, V];

type TuplifyUnion8486<T, L = LastOf8486<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8486<TuplifyUnion8486<Exclude<T, L>>, L>;

type DeepPartial8486<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8486<T[P]> }
  : T;

type Paths8486<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8486<K, Paths8486<T[K], Prev8486[D]>> : never }[keyof T]
  : never;

type Prev8486 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8486<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8486 {
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

type ConfigPaths8486 = Paths8486<NestedConfig8486>;

interface HeavyProps8486 {
  config: DeepPartial8486<NestedConfig8486>;
  path?: ConfigPaths8486;
}

const HeavyComponent8486 = memo(function HeavyComponent8486({ config }: HeavyProps8486) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8486) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8486 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8486: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8486.displayName = 'HeavyComponent8486';
export default HeavyComponent8486;
