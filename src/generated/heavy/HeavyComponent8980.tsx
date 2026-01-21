'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8980<T> = T extends (infer U)[]
  ? DeepReadonlyArray8980<U>
  : T extends object
  ? DeepReadonlyObject8980<T>
  : T;

interface DeepReadonlyArray8980<T> extends ReadonlyArray<DeepReadonly8980<T>> {}

type DeepReadonlyObject8980<T> = {
  readonly [P in keyof T]: DeepReadonly8980<T[P]>;
};

type UnionToIntersection8980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8980<T> = UnionToIntersection8980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8980<T extends unknown[], V> = [...T, V];

type TuplifyUnion8980<T, L = LastOf8980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8980<TuplifyUnion8980<Exclude<T, L>>, L>;

type DeepPartial8980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8980<T[P]> }
  : T;

type Paths8980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8980<K, Paths8980<T[K], Prev8980[D]>> : never }[keyof T]
  : never;

type Prev8980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8980 {
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

type ConfigPaths8980 = Paths8980<NestedConfig8980>;

interface HeavyProps8980 {
  config: DeepPartial8980<NestedConfig8980>;
  path?: ConfigPaths8980;
}

const HeavyComponent8980 = memo(function HeavyComponent8980({ config }: HeavyProps8980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8980.displayName = 'HeavyComponent8980';
export default HeavyComponent8980;
