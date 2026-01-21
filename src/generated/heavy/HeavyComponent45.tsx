'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly45<T> = T extends (infer U)[]
  ? DeepReadonlyArray45<U>
  : T extends object
  ? DeepReadonlyObject45<T>
  : T;

interface DeepReadonlyArray45<T> extends ReadonlyArray<DeepReadonly45<T>> {}

type DeepReadonlyObject45<T> = {
  readonly [P in keyof T]: DeepReadonly45<T[P]>;
};

type UnionToIntersection45<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf45<T> = UnionToIntersection45<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push45<T extends unknown[], V> = [...T, V];

type TuplifyUnion45<T, L = LastOf45<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push45<TuplifyUnion45<Exclude<T, L>>, L>;

type DeepPartial45<T> = T extends object
  ? { [P in keyof T]?: DeepPartial45<T[P]> }
  : T;

type Paths45<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join45<K, Paths45<T[K], Prev45[D]>> : never }[keyof T]
  : never;

type Prev45 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join45<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig45 {
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

type ConfigPaths45 = Paths45<NestedConfig45>;

interface HeavyProps45 {
  config: DeepPartial45<NestedConfig45>;
  path?: ConfigPaths45;
}

const HeavyComponent45 = memo(function HeavyComponent45({ config }: HeavyProps45) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 45) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-45 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H45: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent45.displayName = 'HeavyComponent45';
export default HeavyComponent45;
