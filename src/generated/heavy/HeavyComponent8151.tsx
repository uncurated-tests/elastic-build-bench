'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8151<T> = T extends (infer U)[]
  ? DeepReadonlyArray8151<U>
  : T extends object
  ? DeepReadonlyObject8151<T>
  : T;

interface DeepReadonlyArray8151<T> extends ReadonlyArray<DeepReadonly8151<T>> {}

type DeepReadonlyObject8151<T> = {
  readonly [P in keyof T]: DeepReadonly8151<T[P]>;
};

type UnionToIntersection8151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8151<T> = UnionToIntersection8151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8151<T extends unknown[], V> = [...T, V];

type TuplifyUnion8151<T, L = LastOf8151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8151<TuplifyUnion8151<Exclude<T, L>>, L>;

type DeepPartial8151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8151<T[P]> }
  : T;

type Paths8151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8151<K, Paths8151<T[K], Prev8151[D]>> : never }[keyof T]
  : never;

type Prev8151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8151 {
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

type ConfigPaths8151 = Paths8151<NestedConfig8151>;

interface HeavyProps8151 {
  config: DeepPartial8151<NestedConfig8151>;
  path?: ConfigPaths8151;
}

const HeavyComponent8151 = memo(function HeavyComponent8151({ config }: HeavyProps8151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8151.displayName = 'HeavyComponent8151';
export default HeavyComponent8151;
