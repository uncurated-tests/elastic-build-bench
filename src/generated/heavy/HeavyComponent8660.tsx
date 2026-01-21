'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8660<T> = T extends (infer U)[]
  ? DeepReadonlyArray8660<U>
  : T extends object
  ? DeepReadonlyObject8660<T>
  : T;

interface DeepReadonlyArray8660<T> extends ReadonlyArray<DeepReadonly8660<T>> {}

type DeepReadonlyObject8660<T> = {
  readonly [P in keyof T]: DeepReadonly8660<T[P]>;
};

type UnionToIntersection8660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8660<T> = UnionToIntersection8660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8660<T extends unknown[], V> = [...T, V];

type TuplifyUnion8660<T, L = LastOf8660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8660<TuplifyUnion8660<Exclude<T, L>>, L>;

type DeepPartial8660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8660<T[P]> }
  : T;

type Paths8660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8660<K, Paths8660<T[K], Prev8660[D]>> : never }[keyof T]
  : never;

type Prev8660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8660 {
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

type ConfigPaths8660 = Paths8660<NestedConfig8660>;

interface HeavyProps8660 {
  config: DeepPartial8660<NestedConfig8660>;
  path?: ConfigPaths8660;
}

const HeavyComponent8660 = memo(function HeavyComponent8660({ config }: HeavyProps8660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8660.displayName = 'HeavyComponent8660';
export default HeavyComponent8660;
