'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8096<T> = T extends (infer U)[]
  ? DeepReadonlyArray8096<U>
  : T extends object
  ? DeepReadonlyObject8096<T>
  : T;

interface DeepReadonlyArray8096<T> extends ReadonlyArray<DeepReadonly8096<T>> {}

type DeepReadonlyObject8096<T> = {
  readonly [P in keyof T]: DeepReadonly8096<T[P]>;
};

type UnionToIntersection8096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8096<T> = UnionToIntersection8096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8096<T extends unknown[], V> = [...T, V];

type TuplifyUnion8096<T, L = LastOf8096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8096<TuplifyUnion8096<Exclude<T, L>>, L>;

type DeepPartial8096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8096<T[P]> }
  : T;

type Paths8096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8096<K, Paths8096<T[K], Prev8096[D]>> : never }[keyof T]
  : never;

type Prev8096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8096 {
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

type ConfigPaths8096 = Paths8096<NestedConfig8096>;

interface HeavyProps8096 {
  config: DeepPartial8096<NestedConfig8096>;
  path?: ConfigPaths8096;
}

const HeavyComponent8096 = memo(function HeavyComponent8096({ config }: HeavyProps8096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8096.displayName = 'HeavyComponent8096';
export default HeavyComponent8096;
