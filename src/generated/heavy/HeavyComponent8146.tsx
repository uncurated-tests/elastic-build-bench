'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8146<T> = T extends (infer U)[]
  ? DeepReadonlyArray8146<U>
  : T extends object
  ? DeepReadonlyObject8146<T>
  : T;

interface DeepReadonlyArray8146<T> extends ReadonlyArray<DeepReadonly8146<T>> {}

type DeepReadonlyObject8146<T> = {
  readonly [P in keyof T]: DeepReadonly8146<T[P]>;
};

type UnionToIntersection8146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8146<T> = UnionToIntersection8146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8146<T extends unknown[], V> = [...T, V];

type TuplifyUnion8146<T, L = LastOf8146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8146<TuplifyUnion8146<Exclude<T, L>>, L>;

type DeepPartial8146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8146<T[P]> }
  : T;

type Paths8146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8146<K, Paths8146<T[K], Prev8146[D]>> : never }[keyof T]
  : never;

type Prev8146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8146 {
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

type ConfigPaths8146 = Paths8146<NestedConfig8146>;

interface HeavyProps8146 {
  config: DeepPartial8146<NestedConfig8146>;
  path?: ConfigPaths8146;
}

const HeavyComponent8146 = memo(function HeavyComponent8146({ config }: HeavyProps8146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8146.displayName = 'HeavyComponent8146';
export default HeavyComponent8146;
