'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8986<T> = T extends (infer U)[]
  ? DeepReadonlyArray8986<U>
  : T extends object
  ? DeepReadonlyObject8986<T>
  : T;

interface DeepReadonlyArray8986<T> extends ReadonlyArray<DeepReadonly8986<T>> {}

type DeepReadonlyObject8986<T> = {
  readonly [P in keyof T]: DeepReadonly8986<T[P]>;
};

type UnionToIntersection8986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8986<T> = UnionToIntersection8986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8986<T extends unknown[], V> = [...T, V];

type TuplifyUnion8986<T, L = LastOf8986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8986<TuplifyUnion8986<Exclude<T, L>>, L>;

type DeepPartial8986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8986<T[P]> }
  : T;

type Paths8986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8986<K, Paths8986<T[K], Prev8986[D]>> : never }[keyof T]
  : never;

type Prev8986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8986 {
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

type ConfigPaths8986 = Paths8986<NestedConfig8986>;

interface HeavyProps8986 {
  config: DeepPartial8986<NestedConfig8986>;
  path?: ConfigPaths8986;
}

const HeavyComponent8986 = memo(function HeavyComponent8986({ config }: HeavyProps8986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8986.displayName = 'HeavyComponent8986';
export default HeavyComponent8986;
