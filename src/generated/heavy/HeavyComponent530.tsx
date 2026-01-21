'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly530<T> = T extends (infer U)[]
  ? DeepReadonlyArray530<U>
  : T extends object
  ? DeepReadonlyObject530<T>
  : T;

interface DeepReadonlyArray530<T> extends ReadonlyArray<DeepReadonly530<T>> {}

type DeepReadonlyObject530<T> = {
  readonly [P in keyof T]: DeepReadonly530<T[P]>;
};

type UnionToIntersection530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf530<T> = UnionToIntersection530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push530<T extends unknown[], V> = [...T, V];

type TuplifyUnion530<T, L = LastOf530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push530<TuplifyUnion530<Exclude<T, L>>, L>;

type DeepPartial530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial530<T[P]> }
  : T;

type Paths530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join530<K, Paths530<T[K], Prev530[D]>> : never }[keyof T]
  : never;

type Prev530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig530 {
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

type ConfigPaths530 = Paths530<NestedConfig530>;

interface HeavyProps530 {
  config: DeepPartial530<NestedConfig530>;
  path?: ConfigPaths530;
}

const HeavyComponent530 = memo(function HeavyComponent530({ config }: HeavyProps530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent530.displayName = 'HeavyComponent530';
export default HeavyComponent530;
