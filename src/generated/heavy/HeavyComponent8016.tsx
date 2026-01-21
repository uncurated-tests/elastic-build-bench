'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8016<T> = T extends (infer U)[]
  ? DeepReadonlyArray8016<U>
  : T extends object
  ? DeepReadonlyObject8016<T>
  : T;

interface DeepReadonlyArray8016<T> extends ReadonlyArray<DeepReadonly8016<T>> {}

type DeepReadonlyObject8016<T> = {
  readonly [P in keyof T]: DeepReadonly8016<T[P]>;
};

type UnionToIntersection8016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8016<T> = UnionToIntersection8016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8016<T extends unknown[], V> = [...T, V];

type TuplifyUnion8016<T, L = LastOf8016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8016<TuplifyUnion8016<Exclude<T, L>>, L>;

type DeepPartial8016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8016<T[P]> }
  : T;

type Paths8016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8016<K, Paths8016<T[K], Prev8016[D]>> : never }[keyof T]
  : never;

type Prev8016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8016 {
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

type ConfigPaths8016 = Paths8016<NestedConfig8016>;

interface HeavyProps8016 {
  config: DeepPartial8016<NestedConfig8016>;
  path?: ConfigPaths8016;
}

const HeavyComponent8016 = memo(function HeavyComponent8016({ config }: HeavyProps8016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8016.displayName = 'HeavyComponent8016';
export default HeavyComponent8016;
