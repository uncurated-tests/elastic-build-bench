'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8723<T> = T extends (infer U)[]
  ? DeepReadonlyArray8723<U>
  : T extends object
  ? DeepReadonlyObject8723<T>
  : T;

interface DeepReadonlyArray8723<T> extends ReadonlyArray<DeepReadonly8723<T>> {}

type DeepReadonlyObject8723<T> = {
  readonly [P in keyof T]: DeepReadonly8723<T[P]>;
};

type UnionToIntersection8723<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8723<T> = UnionToIntersection8723<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8723<T extends unknown[], V> = [...T, V];

type TuplifyUnion8723<T, L = LastOf8723<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8723<TuplifyUnion8723<Exclude<T, L>>, L>;

type DeepPartial8723<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8723<T[P]> }
  : T;

type Paths8723<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8723<K, Paths8723<T[K], Prev8723[D]>> : never }[keyof T]
  : never;

type Prev8723 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8723<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8723 {
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

type ConfigPaths8723 = Paths8723<NestedConfig8723>;

interface HeavyProps8723 {
  config: DeepPartial8723<NestedConfig8723>;
  path?: ConfigPaths8723;
}

const HeavyComponent8723 = memo(function HeavyComponent8723({ config }: HeavyProps8723) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8723) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8723 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8723: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8723.displayName = 'HeavyComponent8723';
export default HeavyComponent8723;
