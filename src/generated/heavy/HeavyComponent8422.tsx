'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8422<T> = T extends (infer U)[]
  ? DeepReadonlyArray8422<U>
  : T extends object
  ? DeepReadonlyObject8422<T>
  : T;

interface DeepReadonlyArray8422<T> extends ReadonlyArray<DeepReadonly8422<T>> {}

type DeepReadonlyObject8422<T> = {
  readonly [P in keyof T]: DeepReadonly8422<T[P]>;
};

type UnionToIntersection8422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8422<T> = UnionToIntersection8422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8422<T extends unknown[], V> = [...T, V];

type TuplifyUnion8422<T, L = LastOf8422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8422<TuplifyUnion8422<Exclude<T, L>>, L>;

type DeepPartial8422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8422<T[P]> }
  : T;

type Paths8422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8422<K, Paths8422<T[K], Prev8422[D]>> : never }[keyof T]
  : never;

type Prev8422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8422 {
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

type ConfigPaths8422 = Paths8422<NestedConfig8422>;

interface HeavyProps8422 {
  config: DeepPartial8422<NestedConfig8422>;
  path?: ConfigPaths8422;
}

const HeavyComponent8422 = memo(function HeavyComponent8422({ config }: HeavyProps8422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8422.displayName = 'HeavyComponent8422';
export default HeavyComponent8422;
