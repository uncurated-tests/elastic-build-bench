'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8088<T> = T extends (infer U)[]
  ? DeepReadonlyArray8088<U>
  : T extends object
  ? DeepReadonlyObject8088<T>
  : T;

interface DeepReadonlyArray8088<T> extends ReadonlyArray<DeepReadonly8088<T>> {}

type DeepReadonlyObject8088<T> = {
  readonly [P in keyof T]: DeepReadonly8088<T[P]>;
};

type UnionToIntersection8088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8088<T> = UnionToIntersection8088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8088<T extends unknown[], V> = [...T, V];

type TuplifyUnion8088<T, L = LastOf8088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8088<TuplifyUnion8088<Exclude<T, L>>, L>;

type DeepPartial8088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8088<T[P]> }
  : T;

type Paths8088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8088<K, Paths8088<T[K], Prev8088[D]>> : never }[keyof T]
  : never;

type Prev8088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8088 {
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

type ConfigPaths8088 = Paths8088<NestedConfig8088>;

interface HeavyProps8088 {
  config: DeepPartial8088<NestedConfig8088>;
  path?: ConfigPaths8088;
}

const HeavyComponent8088 = memo(function HeavyComponent8088({ config }: HeavyProps8088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8088.displayName = 'HeavyComponent8088';
export default HeavyComponent8088;
