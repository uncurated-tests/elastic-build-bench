'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8158<T> = T extends (infer U)[]
  ? DeepReadonlyArray8158<U>
  : T extends object
  ? DeepReadonlyObject8158<T>
  : T;

interface DeepReadonlyArray8158<T> extends ReadonlyArray<DeepReadonly8158<T>> {}

type DeepReadonlyObject8158<T> = {
  readonly [P in keyof T]: DeepReadonly8158<T[P]>;
};

type UnionToIntersection8158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8158<T> = UnionToIntersection8158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8158<T extends unknown[], V> = [...T, V];

type TuplifyUnion8158<T, L = LastOf8158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8158<TuplifyUnion8158<Exclude<T, L>>, L>;

type DeepPartial8158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8158<T[P]> }
  : T;

type Paths8158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8158<K, Paths8158<T[K], Prev8158[D]>> : never }[keyof T]
  : never;

type Prev8158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8158 {
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

type ConfigPaths8158 = Paths8158<NestedConfig8158>;

interface HeavyProps8158 {
  config: DeepPartial8158<NestedConfig8158>;
  path?: ConfigPaths8158;
}

const HeavyComponent8158 = memo(function HeavyComponent8158({ config }: HeavyProps8158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8158.displayName = 'HeavyComponent8158';
export default HeavyComponent8158;
