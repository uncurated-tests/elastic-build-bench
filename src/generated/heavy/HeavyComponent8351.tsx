'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8351<T> = T extends (infer U)[]
  ? DeepReadonlyArray8351<U>
  : T extends object
  ? DeepReadonlyObject8351<T>
  : T;

interface DeepReadonlyArray8351<T> extends ReadonlyArray<DeepReadonly8351<T>> {}

type DeepReadonlyObject8351<T> = {
  readonly [P in keyof T]: DeepReadonly8351<T[P]>;
};

type UnionToIntersection8351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8351<T> = UnionToIntersection8351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8351<T extends unknown[], V> = [...T, V];

type TuplifyUnion8351<T, L = LastOf8351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8351<TuplifyUnion8351<Exclude<T, L>>, L>;

type DeepPartial8351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8351<T[P]> }
  : T;

type Paths8351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8351<K, Paths8351<T[K], Prev8351[D]>> : never }[keyof T]
  : never;

type Prev8351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8351 {
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

type ConfigPaths8351 = Paths8351<NestedConfig8351>;

interface HeavyProps8351 {
  config: DeepPartial8351<NestedConfig8351>;
  path?: ConfigPaths8351;
}

const HeavyComponent8351 = memo(function HeavyComponent8351({ config }: HeavyProps8351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8351.displayName = 'HeavyComponent8351';
export default HeavyComponent8351;
