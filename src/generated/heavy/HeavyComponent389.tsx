'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly389<T> = T extends (infer U)[]
  ? DeepReadonlyArray389<U>
  : T extends object
  ? DeepReadonlyObject389<T>
  : T;

interface DeepReadonlyArray389<T> extends ReadonlyArray<DeepReadonly389<T>> {}

type DeepReadonlyObject389<T> = {
  readonly [P in keyof T]: DeepReadonly389<T[P]>;
};

type UnionToIntersection389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf389<T> = UnionToIntersection389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push389<T extends unknown[], V> = [...T, V];

type TuplifyUnion389<T, L = LastOf389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push389<TuplifyUnion389<Exclude<T, L>>, L>;

type DeepPartial389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial389<T[P]> }
  : T;

type Paths389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join389<K, Paths389<T[K], Prev389[D]>> : never }[keyof T]
  : never;

type Prev389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig389 {
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

type ConfigPaths389 = Paths389<NestedConfig389>;

interface HeavyProps389 {
  config: DeepPartial389<NestedConfig389>;
  path?: ConfigPaths389;
}

const HeavyComponent389 = memo(function HeavyComponent389({ config }: HeavyProps389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent389.displayName = 'HeavyComponent389';
export default HeavyComponent389;
