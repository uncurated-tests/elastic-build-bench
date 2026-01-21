'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8104<T> = T extends (infer U)[]
  ? DeepReadonlyArray8104<U>
  : T extends object
  ? DeepReadonlyObject8104<T>
  : T;

interface DeepReadonlyArray8104<T> extends ReadonlyArray<DeepReadonly8104<T>> {}

type DeepReadonlyObject8104<T> = {
  readonly [P in keyof T]: DeepReadonly8104<T[P]>;
};

type UnionToIntersection8104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8104<T> = UnionToIntersection8104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8104<T extends unknown[], V> = [...T, V];

type TuplifyUnion8104<T, L = LastOf8104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8104<TuplifyUnion8104<Exclude<T, L>>, L>;

type DeepPartial8104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8104<T[P]> }
  : T;

type Paths8104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8104<K, Paths8104<T[K], Prev8104[D]>> : never }[keyof T]
  : never;

type Prev8104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8104 {
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

type ConfigPaths8104 = Paths8104<NestedConfig8104>;

interface HeavyProps8104 {
  config: DeepPartial8104<NestedConfig8104>;
  path?: ConfigPaths8104;
}

const HeavyComponent8104 = memo(function HeavyComponent8104({ config }: HeavyProps8104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8104.displayName = 'HeavyComponent8104';
export default HeavyComponent8104;
