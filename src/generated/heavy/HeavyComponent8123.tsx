'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8123<T> = T extends (infer U)[]
  ? DeepReadonlyArray8123<U>
  : T extends object
  ? DeepReadonlyObject8123<T>
  : T;

interface DeepReadonlyArray8123<T> extends ReadonlyArray<DeepReadonly8123<T>> {}

type DeepReadonlyObject8123<T> = {
  readonly [P in keyof T]: DeepReadonly8123<T[P]>;
};

type UnionToIntersection8123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8123<T> = UnionToIntersection8123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8123<T extends unknown[], V> = [...T, V];

type TuplifyUnion8123<T, L = LastOf8123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8123<TuplifyUnion8123<Exclude<T, L>>, L>;

type DeepPartial8123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8123<T[P]> }
  : T;

type Paths8123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8123<K, Paths8123<T[K], Prev8123[D]>> : never }[keyof T]
  : never;

type Prev8123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8123 {
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

type ConfigPaths8123 = Paths8123<NestedConfig8123>;

interface HeavyProps8123 {
  config: DeepPartial8123<NestedConfig8123>;
  path?: ConfigPaths8123;
}

const HeavyComponent8123 = memo(function HeavyComponent8123({ config }: HeavyProps8123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8123.displayName = 'HeavyComponent8123';
export default HeavyComponent8123;
