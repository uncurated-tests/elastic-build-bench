'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8855<T> = T extends (infer U)[]
  ? DeepReadonlyArray8855<U>
  : T extends object
  ? DeepReadonlyObject8855<T>
  : T;

interface DeepReadonlyArray8855<T> extends ReadonlyArray<DeepReadonly8855<T>> {}

type DeepReadonlyObject8855<T> = {
  readonly [P in keyof T]: DeepReadonly8855<T[P]>;
};

type UnionToIntersection8855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8855<T> = UnionToIntersection8855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8855<T extends unknown[], V> = [...T, V];

type TuplifyUnion8855<T, L = LastOf8855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8855<TuplifyUnion8855<Exclude<T, L>>, L>;

type DeepPartial8855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8855<T[P]> }
  : T;

type Paths8855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8855<K, Paths8855<T[K], Prev8855[D]>> : never }[keyof T]
  : never;

type Prev8855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8855 {
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

type ConfigPaths8855 = Paths8855<NestedConfig8855>;

interface HeavyProps8855 {
  config: DeepPartial8855<NestedConfig8855>;
  path?: ConfigPaths8855;
}

const HeavyComponent8855 = memo(function HeavyComponent8855({ config }: HeavyProps8855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8855.displayName = 'HeavyComponent8855';
export default HeavyComponent8855;
