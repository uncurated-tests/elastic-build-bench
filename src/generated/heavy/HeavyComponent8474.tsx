'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8474<T> = T extends (infer U)[]
  ? DeepReadonlyArray8474<U>
  : T extends object
  ? DeepReadonlyObject8474<T>
  : T;

interface DeepReadonlyArray8474<T> extends ReadonlyArray<DeepReadonly8474<T>> {}

type DeepReadonlyObject8474<T> = {
  readonly [P in keyof T]: DeepReadonly8474<T[P]>;
};

type UnionToIntersection8474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8474<T> = UnionToIntersection8474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8474<T extends unknown[], V> = [...T, V];

type TuplifyUnion8474<T, L = LastOf8474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8474<TuplifyUnion8474<Exclude<T, L>>, L>;

type DeepPartial8474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8474<T[P]> }
  : T;

type Paths8474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8474<K, Paths8474<T[K], Prev8474[D]>> : never }[keyof T]
  : never;

type Prev8474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8474 {
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

type ConfigPaths8474 = Paths8474<NestedConfig8474>;

interface HeavyProps8474 {
  config: DeepPartial8474<NestedConfig8474>;
  path?: ConfigPaths8474;
}

const HeavyComponent8474 = memo(function HeavyComponent8474({ config }: HeavyProps8474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8474.displayName = 'HeavyComponent8474';
export default HeavyComponent8474;
