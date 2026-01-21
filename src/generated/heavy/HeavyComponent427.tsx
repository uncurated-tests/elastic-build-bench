'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly427<T> = T extends (infer U)[]
  ? DeepReadonlyArray427<U>
  : T extends object
  ? DeepReadonlyObject427<T>
  : T;

interface DeepReadonlyArray427<T> extends ReadonlyArray<DeepReadonly427<T>> {}

type DeepReadonlyObject427<T> = {
  readonly [P in keyof T]: DeepReadonly427<T[P]>;
};

type UnionToIntersection427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf427<T> = UnionToIntersection427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push427<T extends unknown[], V> = [...T, V];

type TuplifyUnion427<T, L = LastOf427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push427<TuplifyUnion427<Exclude<T, L>>, L>;

type DeepPartial427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial427<T[P]> }
  : T;

type Paths427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join427<K, Paths427<T[K], Prev427[D]>> : never }[keyof T]
  : never;

type Prev427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig427 {
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

type ConfigPaths427 = Paths427<NestedConfig427>;

interface HeavyProps427 {
  config: DeepPartial427<NestedConfig427>;
  path?: ConfigPaths427;
}

const HeavyComponent427 = memo(function HeavyComponent427({ config }: HeavyProps427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent427.displayName = 'HeavyComponent427';
export default HeavyComponent427;
