'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14719<T> = T extends (infer U)[]
  ? DeepReadonlyArray14719<U>
  : T extends object
  ? DeepReadonlyObject14719<T>
  : T;

interface DeepReadonlyArray14719<T> extends ReadonlyArray<DeepReadonly14719<T>> {}

type DeepReadonlyObject14719<T> = {
  readonly [P in keyof T]: DeepReadonly14719<T[P]>;
};

type UnionToIntersection14719<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14719<T> = UnionToIntersection14719<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14719<T extends unknown[], V> = [...T, V];

type TuplifyUnion14719<T, L = LastOf14719<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14719<TuplifyUnion14719<Exclude<T, L>>, L>;

type DeepPartial14719<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14719<T[P]> }
  : T;

type Paths14719<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14719<K, Paths14719<T[K], Prev14719[D]>> : never }[keyof T]
  : never;

type Prev14719 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14719<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14719 {
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

type ConfigPaths14719 = Paths14719<NestedConfig14719>;

interface HeavyProps14719 {
  config: DeepPartial14719<NestedConfig14719>;
  path?: ConfigPaths14719;
}

const HeavyComponent14719 = memo(function HeavyComponent14719({ config }: HeavyProps14719) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14719) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14719 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14719: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14719.displayName = 'HeavyComponent14719';
export default HeavyComponent14719;
