'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8107<T> = T extends (infer U)[]
  ? DeepReadonlyArray8107<U>
  : T extends object
  ? DeepReadonlyObject8107<T>
  : T;

interface DeepReadonlyArray8107<T> extends ReadonlyArray<DeepReadonly8107<T>> {}

type DeepReadonlyObject8107<T> = {
  readonly [P in keyof T]: DeepReadonly8107<T[P]>;
};

type UnionToIntersection8107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8107<T> = UnionToIntersection8107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8107<T extends unknown[], V> = [...T, V];

type TuplifyUnion8107<T, L = LastOf8107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8107<TuplifyUnion8107<Exclude<T, L>>, L>;

type DeepPartial8107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8107<T[P]> }
  : T;

type Paths8107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8107<K, Paths8107<T[K], Prev8107[D]>> : never }[keyof T]
  : never;

type Prev8107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8107 {
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

type ConfigPaths8107 = Paths8107<NestedConfig8107>;

interface HeavyProps8107 {
  config: DeepPartial8107<NestedConfig8107>;
  path?: ConfigPaths8107;
}

const HeavyComponent8107 = memo(function HeavyComponent8107({ config }: HeavyProps8107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8107.displayName = 'HeavyComponent8107';
export default HeavyComponent8107;
