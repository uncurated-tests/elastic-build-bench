'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8223<T> = T extends (infer U)[]
  ? DeepReadonlyArray8223<U>
  : T extends object
  ? DeepReadonlyObject8223<T>
  : T;

interface DeepReadonlyArray8223<T> extends ReadonlyArray<DeepReadonly8223<T>> {}

type DeepReadonlyObject8223<T> = {
  readonly [P in keyof T]: DeepReadonly8223<T[P]>;
};

type UnionToIntersection8223<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8223<T> = UnionToIntersection8223<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8223<T extends unknown[], V> = [...T, V];

type TuplifyUnion8223<T, L = LastOf8223<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8223<TuplifyUnion8223<Exclude<T, L>>, L>;

type DeepPartial8223<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8223<T[P]> }
  : T;

type Paths8223<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8223<K, Paths8223<T[K], Prev8223[D]>> : never }[keyof T]
  : never;

type Prev8223 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8223<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8223 {
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

type ConfigPaths8223 = Paths8223<NestedConfig8223>;

interface HeavyProps8223 {
  config: DeepPartial8223<NestedConfig8223>;
  path?: ConfigPaths8223;
}

const HeavyComponent8223 = memo(function HeavyComponent8223({ config }: HeavyProps8223) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8223) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8223 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8223: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8223.displayName = 'HeavyComponent8223';
export default HeavyComponent8223;
