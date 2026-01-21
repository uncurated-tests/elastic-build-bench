'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8941<T> = T extends (infer U)[]
  ? DeepReadonlyArray8941<U>
  : T extends object
  ? DeepReadonlyObject8941<T>
  : T;

interface DeepReadonlyArray8941<T> extends ReadonlyArray<DeepReadonly8941<T>> {}

type DeepReadonlyObject8941<T> = {
  readonly [P in keyof T]: DeepReadonly8941<T[P]>;
};

type UnionToIntersection8941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8941<T> = UnionToIntersection8941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8941<T extends unknown[], V> = [...T, V];

type TuplifyUnion8941<T, L = LastOf8941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8941<TuplifyUnion8941<Exclude<T, L>>, L>;

type DeepPartial8941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8941<T[P]> }
  : T;

type Paths8941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8941<K, Paths8941<T[K], Prev8941[D]>> : never }[keyof T]
  : never;

type Prev8941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8941 {
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

type ConfigPaths8941 = Paths8941<NestedConfig8941>;

interface HeavyProps8941 {
  config: DeepPartial8941<NestedConfig8941>;
  path?: ConfigPaths8941;
}

const HeavyComponent8941 = memo(function HeavyComponent8941({ config }: HeavyProps8941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8941.displayName = 'HeavyComponent8941';
export default HeavyComponent8941;
