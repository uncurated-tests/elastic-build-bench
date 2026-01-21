'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8555<T> = T extends (infer U)[]
  ? DeepReadonlyArray8555<U>
  : T extends object
  ? DeepReadonlyObject8555<T>
  : T;

interface DeepReadonlyArray8555<T> extends ReadonlyArray<DeepReadonly8555<T>> {}

type DeepReadonlyObject8555<T> = {
  readonly [P in keyof T]: DeepReadonly8555<T[P]>;
};

type UnionToIntersection8555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8555<T> = UnionToIntersection8555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8555<T extends unknown[], V> = [...T, V];

type TuplifyUnion8555<T, L = LastOf8555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8555<TuplifyUnion8555<Exclude<T, L>>, L>;

type DeepPartial8555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8555<T[P]> }
  : T;

type Paths8555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8555<K, Paths8555<T[K], Prev8555[D]>> : never }[keyof T]
  : never;

type Prev8555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8555 {
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

type ConfigPaths8555 = Paths8555<NestedConfig8555>;

interface HeavyProps8555 {
  config: DeepPartial8555<NestedConfig8555>;
  path?: ConfigPaths8555;
}

const HeavyComponent8555 = memo(function HeavyComponent8555({ config }: HeavyProps8555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8555.displayName = 'HeavyComponent8555';
export default HeavyComponent8555;
